import React from "react";
import profileImage from "/public/Icons/ic_user.svg";
import cartIcon from "/public/Icons/ic_cart.svg";
import SidebarUserInfo from "./SidebarUserInfo";
import SidebarContent from "./SidebarContent";

export default function SidebarNav() {
  const sidebarContent = [
    {
      icon: profileImage,
      text: "Profile",
    },
    {
      icon: cartIcon,
      text: "Market Place",
    },
  ];
  return (
    <div className="w-[400px]">
      <div className="flex flex-col items-center  border-r border-slate min-h-screen h-full ">
        {/* Sidebar Content */}
        <div className=" flex mx-4 justify-center w-80 h-[115px] p-4 overflow-y-auto">
          <SidebarUserInfo />
        </div>
        {/* Sidebar Content */}
        {sidebarContent.map((content, i) => (
          <SidebarContent key={i} content={content.text} icon={content.icon} />
        ))}
      </div>
    </div>
  );
}
