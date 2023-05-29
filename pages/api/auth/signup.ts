import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const errors: string[] = [];

    const validatorSchema = [
      {
        valid: validator.isLength(username, { min: 3, max: 20 }),
        errorMessage: "Username must be between 3 and 20 characters",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is not valid",
      },
      {
        valid: validator.isLength(password, { min: 6, max: 20 }),
        errorMessage: "Password must be between 6 and 20 characters",
      },
    ];

    validatorSchema.forEach((validation) => {
      if (!validation.valid) {
        errors.push(validation.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({ errorMessage: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: newUser.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .sign(secret);

    setCookie("jwt", token, {
      req,
      res,
      maxAge: 7200,
      secure: true,
      httpOnly: true,
    });

    return res.status(200).json({
      username: newUser.username,
      email: newUser.email,
    });
  }
}
