"use client";
import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: true,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });

  const fetchUserData = async () => {
    console.log("called in fetchUserData");
    setAuthState({ data: null, error: null, loading: true });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({ data: null, error: null, loading: false });
      }
      const res = await fetch("/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Res Here in AuthContext => ", res);
      setAuthState({ data: res.data, error: null, loading: false });
    } catch (error: any) {
      console.log("Error here in AuthContext => ", error);
      setAuthState({ data: null, error: error.message, loading: false });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
