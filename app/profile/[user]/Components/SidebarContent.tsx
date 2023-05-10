import React from "react";
import Image from "next/image";
import Link from "next/link";

function SidebarContent({ content, icon }: { content: string; icon: string }) {
  return (
    <div className="flex items-center mx-4 mt-9 w-1/2 h-[50px] w-[250px] rounded-md transition duration-300 ease-in-out hover:bg-slate-200 cursor-pointer">
      <div className="w-[50px] flex items-center justify-center">
        <Image src={icon} width={30} height={30} alt="" />
      </div>
      <div className="ml-5">
        <Link href={content === "profile" ? "/profile/dog" : "/marketplace"}>
          {content}
        </Link>
      </div>
    </div>
  );
}

export default SidebarContent;
