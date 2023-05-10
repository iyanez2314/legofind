"use client";

import React from "react";
import Header from "../../Component/Header";
import BackgroundImage from "@/app/Component/BackgroundImage";
import SidebarNav from "./Components/SidebarNav";
import FilterNav from "./Components/FilterNav";
import UserProfileCards from "./Components/UserProfileCards";

export default function UserProfile() {
  return (
    <div className="bg-white min-h-screen h-full">
      <Header />
      <BackgroundImage />
      <div className="flex mt-[100px]">
        <SidebarNav />
        <div className="w-full ">
          <FilterNav />
          <div className="flex flex-wrap w-full">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <UserProfileCards key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
