"use client";
import React, { useContext } from "react";
import Image from "next/image";
import legoman from "/public/Icons/legoman.png";
import AuthModal from "./AuthModal";
import { AuthenticationContext } from "../context/AuthContext";
import Link from "next/link";

export default function NavBar() {
  const { data } = useContext(AuthenticationContext);

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex items-center">
          <Image src={legoman} width={100} height={100} alt="" />
          <span className="text-black font-semibold text-sm">Lego Find</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {data ? (
          <>
            <Link href={`/profile/${data.username}`}>Profile</Link>
          </>
        ) : (
          <>
            <AuthModal isSignin={true} /> <span aria-hidden="true">&rarr;</span>
          </>
        )}
      </div>
    </nav>
  );
}
