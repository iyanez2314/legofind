import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const allPosts = await prisma.post.findMany({
      select: {
        images: true,
        title: true,
        content: true,
        price: true,
      },
    });
    return res.status(200).json(allPosts);
  } else {
    return res.status(400).json({ error: "Only GET requests are allowed" });
  }
}
