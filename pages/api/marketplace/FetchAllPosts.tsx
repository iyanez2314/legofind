import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();

      const allPosts = await prisma.post.findMany({
        select: {
          images: true,
          title: true,
          content: true,
          price: true,
        },
      });
      return res.status(200).json(allPosts);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  } else {
    return res.status(400).json({ error: "Only GET requests are allowed" });
  }
}
