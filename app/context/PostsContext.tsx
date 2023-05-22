"use client";
import React, { useState, createContext, useEffect } from "react";

interface PostContextType {
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

export const PostsContext = createContext<PostContextType | undefined>(
  undefined
);

export default function PostsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<any>([]);

  const fetchPostsData = async () => {
    const res = await fetch("/api/marketplace/FetchAllPosts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
