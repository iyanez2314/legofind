import React from "react";

interface Props {
  inputs: {
    username: string;
    email: string;
    name: string;
    password: string;
  };
  isSignin: boolean;
}

export default function AuthModalInput({ inputs, isSignin }: Props) {
  return (
    <div>
      <h1>{isSignin ? "Login" : "Sign up"}</h1>
      {isSignin ? (
        <>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </>
      )}
    </div>
  );
}
