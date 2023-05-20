"use client";
import SidebarUserInfo from "../profile/[user]/Components/SidebarUserInfo";
import MarketPlaceFilter from "./components/MarketPlaceFilter";
import FilterNav from "../profile/[user]/Components/FilterNav";
import Header from "../Component/Header";
import BackgroundImage from "../Component/BackgroundImage";
import UserProfileCards from "../profile/[user]/Components/UserProfileCards";
import { Price, PrismaClient } from "@prisma/client";
import React, { useState, useEffect } from "react";

// const prisma = new PrismaClient();

export interface PostCardType {
  images: string[];
  title: string;
  content: string;
  price: Price;
}

export default function MarketplaceHome() {
  const [posts, setPosts] = useState([]);

  const fetchPostsData = async () => {
    const res = await fetch("/api/marketplace/FetchAllPosts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div className="bg-white min-h-screen h-full">
      <Header />
      <BackgroundImage />
      <div className="flex mt-[100px]">
        <div className="w-[400px] z-50  ">
          <div className="flex flex-col items-center  border-r border-slate min-h-screen h-full ">
            <div className=" flex mx-4 justify-center w-80 h-[115px] p-4 overflow-y-auto mt-6">
              <SidebarUserInfo />
            </div>
            <MarketPlaceFilter />
          </div>
        </div>
        <div className=" z-50 w-full ">
          <FilterNav page={true} setPosts={setPosts} />
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
