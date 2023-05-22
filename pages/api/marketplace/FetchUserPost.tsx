import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany({
        where: {
          authorId: "77f66442-3d78-435a-a4c5-a18672b82c32",
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  } else {
    return res.status(400).json({ error: "Only GET requests are allowed" });
  }
}
