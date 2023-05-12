import React from "react";
import Header from "../../Component/Header";
import BackgroundImage from "@/app/Component/BackgroundImage";
import SidebarNav from "./Components/SidebarNav";
import FilterNav from "./Components/FilterNav";
import UserProfileCards from "./Components/UserProfileCards";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

const fetchUserData = async (): Promise<Post[]> => {
  const data = await prisma.post.findMany({
    where: {
      authorId: "d9517874-66b6-49e8-a4ce-148e33fe1cfc",
    },
  });
  return data;
};

export default async function UserProfile() {
  const posts = await fetchUserData();
  return (
    <div className="bg-white min-h-screen h-full">
      <Header />
      <BackgroundImage />
      <div className="flex mt-[100px]">
        <SidebarNav />
        <div className="w-full ">
          <FilterNav page={false} />
          <div className="flex flex-wrap w-full">
            {posts.map((post, i) => (
              <UserProfileCards key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
