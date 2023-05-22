"use client";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext<any | undefined>(undefined);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userPosts, setUserPosts] = useState<any>([]);

  const fetchUserData = async () => {
    const res = await fetch("/api/marketplace/FetchUserPost");
    const data = await res.json();
    setUserPosts(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userPosts, setUserPosts }}>
      {children}
    </UserContext.Provider>
  );
}
