import React from "react";

export default function UserProfileCards() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="relative w-full h-40 mb-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card image"
            className="rounded-t-lg"
          />
        </div>
        <h1 className="text-xl font-bold">Card Title</h1>
        <p className="text-gray-700 mt-2">Card content goes here</p>
      </div>
    </div>
  );
}
