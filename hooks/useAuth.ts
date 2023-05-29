import { removeCookies } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({ data: null, error: null, loading: true });
    try {
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log("Data Here in useAuth => ", data);
      setAuthState({ data: data, error: null, loading: false });
    } catch (error: any) {
      console.log("Error Here in useAuth => ", error);
      setAuthState({ data: null, error: error.message, loading: false });
    }
  };

  const signup = async (
    username: string,
    email: string,
    password: string
  ) => {};

  return { signin, signup };
};

export default useAuth;
