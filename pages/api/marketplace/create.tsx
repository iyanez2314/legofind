import { convertPrice } from "@/utils/PriceConversion";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content, images, price, isSold, condition } = req.body;

    const priceCheck = convertPrice(price);

    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          images,
          price: priceCheck,
          isSold,
          condition,
          authorId: "77f66442-3d78-435a-a4c5-a18672b82c32",
        },
      });

      res.status(200).json({ post }); // Return the created post
    } catch (error: any) {
      // Return the actual error message
      res.status(500).json({ error: `Error creating post: ${error.message}` });
    }
  } else {
    res.status(405).json({ error: "Invalid HTTP method" });
  }
}
