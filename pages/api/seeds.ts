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
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

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
        images: [],
      },
    });
  }

  console.log("Seeding completed!");
  res.status(200).json({ name: "hello" });
}
