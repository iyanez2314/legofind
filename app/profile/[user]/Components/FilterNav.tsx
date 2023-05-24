import React from "react";
import UserProfileModal from "./UserProfileModal";
import { Price } from "@prisma/client";

export default function FilterNav() {
  return (
    <>
      <div className="p-6 justify-between flex items-center">
        <div className="flex flex-start">
          <h1 className="text-xl font-semibold">Isaac's Lego Sets</h1>
        </div>
        <div>
          <UserProfileModal />
        </div>
      </div>
    </>
  );
}
