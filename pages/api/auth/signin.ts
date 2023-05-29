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
    console.log("request made to signin api");
    const { email, password } = req.body;
    const errors: string[] = [];

    const validatorSchema = [
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

    if (!user) {
      return res.status(401).json({ errorMessage: "Email does not exist" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ errorMessage: "Password is incorrect" });
    }

    const alg = "HS256";
    const seceret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .sign(seceret);

    setCookie("jwt", token, {
      req,
      res,
      maxAge: 7200,
      secure: true,
      httpOnly: true,
    });

    return res.status(200).json({
      username: user.username,
      email: user.email,
      id: user.id,
    });
  }
}
