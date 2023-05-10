import React from "react";
import Image from "next/image";
import legoface from "/public/Icons/lego-3.jpeg";

export default function SidebarUserInfo() {
  return (
    <div className="pb-4 capitalize gap-4 flex items-center bg-slate-100 rounded-lg w-[255px] h-[75px]">
      <div className="flex items-center justify-center w-1/2 h-[55px] mt-4">
        <Image
          src={legoface}
          width={50}
          height={50}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="flex items-center w-full h-[55px] mt-4">
        <h1 className="text-sm font-semibold">Isaac Yanez</h1>
      </div>
    </div>
  );
}
