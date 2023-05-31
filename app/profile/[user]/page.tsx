import UserProfileComponent from "./Components/UserProfileComponent";
import UserProvider from "@/app/context/UserContext";
import AuthContext from "@/app/context/AuthContext";
import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";
const prisma = new PrismaClient();

const fetchUserWithPosts = async (slug: string) => {
  const username = slug.params.user;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  const associatedPosts = fetchPosts(user);
  return associatedPosts;
};

async function fetchPosts(user: any) {
  const { id } = user;
  const associatedPosts = await prisma.post.findMany({
    where: {
      id,
    },
  });

  return associatedPosts;
}

export default async function UserProfile(slug: string) {
  const usersPosts = await fetchUserWithPosts(slug);
  return <UserProfileComponent usersPosts={usersPosts} />;
}
