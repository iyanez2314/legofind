import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
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
      return res.status(400).json({ errorMessage: "Email does not exist" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ errorMessage: "Password is incorrect" });
    }

    return res.status(200).json({ successMessage: "Logged in successfully" });
  }
}
