"use client";
import FilterNav from "../components/FilterNav";
import { Price, PrismaClient } from "@prisma/client";
import React, { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import UserProfileCards from "@/app/profile/[user]/Components/UserProfileCards";

export interface PostCardType {
  images: string[];
  title: string;
  content: string;
  price: Price;
}

export default function MarketplaceHome() {
  const { posts } = useContext(PostsContext);
  return (
    <div className="bg-white min-h-screen h-full">
      <div>
        <div className=" z-50 w-full ">
          <FilterNav />
          <div className="flex flex-wrap w-full">
            {posts.map((post, i) => (
              <UserProfileCards key={i} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
