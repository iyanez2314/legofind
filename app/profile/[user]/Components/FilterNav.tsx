import React, { useContext } from "react";
import UserProfileModal from "./UserProfileModal";
import { Price } from "@prisma/client";
import { AuthenticationContext } from "../../../context/AuthContext";

export default function FilterNav() {
  const { loading, data, error } = useContext(AuthenticationContext);
  console.log("Data in FilterNav fudge => ", data);
  return (
    <>
      <div className="p-6 justify-between flex items-center">
        <div className="flex flex-start">
          <h1 className="text-xl font-semibold">
            {data ? `${data.username} Lego Sets` : "User"}
          </h1>
        </div>
        <div>
          <UserProfileModal />
        </div>
      </div>
    </>
  );
}
