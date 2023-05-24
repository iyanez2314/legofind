"use client";
import React, { useContext } from "react";
import Header from "../../../Component/Header";
import BackgroundImage from "@/app/Component/BackgroundImage";
import SidebarNav from "../Components/SidebarNav";
import FilterNav from "../Components/FilterNav";
import UserProfileCards from "../Components/UserProfileCards";
import { UserContext } from "@/app/context/UserContext";

export default function UserProfileComponent() {
  const { userPosts } = useContext(UserContext);
  return (
    <div className="bg-white min-h-screen h-full">
      <Header />
      <BackgroundImage />
      <div className="flex mt-[100px]">
        <SidebarNav />
        <div className="w-full ">
          <FilterNav />
          <div className="flex flex-wrap w-full">
            {userPosts.map((post, i) => (
              <UserProfileCards key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
