import { PostCardType } from "@/app/marketplace/page";
import React from "react";
import Image from "next/image";

interface Props {
  post: PostCardType;
}

export default function UserProfileCards({ post }: Props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4 cursor-pointer">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="relative w-full aspect-w-3 aspect-h-2 mb-4">
          <img
            src={post.images[0]}
            alt="Card image"
            className="rounded-t-lg w-full h-full object-cover"
          />
        </div>
        <div className="p-6 mt-6">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-gray-700 mt-2">{post.content}</p>
          <p className="text-gray-700 mt-2 text-sm">${post.price}</p>
        </div>
      </div>
    </div>
  );
}
