import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", username: "johndoe" },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      username: "janesmith",
    },
  ];

  const posts = [
    {
      title: "First Post",
      content: "This is the content of the first post.",
      authorEmail: "john.doe@example.com",
    },
    {
      title: "Second Post",
      content: "This is the content of the second post.",
      authorEmail: "jane.smith@example.com",
    },
  ];

  for (const user of users) {
    const hashedPassword = await hash("password", 10);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  for (const post of posts) {
    const author = await prisma.user.findUnique({
      where: { email: post.authorEmail },
    });

    if (!author) {
      throw new Error(`User with email ${post.authorEmail} not found.`);
    }

    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: { connect: { id: author.id } },
        price: "MEDIUM",
        images: [
          "https://www.lego.com/cdn/cs/set/assets/blt98ab23663c973e9b/42123.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
        ],
      },
    });
  }

  console.log("Seeding completed!");
  res.status(200).json({ name: "hello" });
}
