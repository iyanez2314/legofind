import React from "react";

export default function UserProfileCards() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4 cursor-pointer">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="relative w-full aspect-w-3 aspect-h-2 mb-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Card image"
            className="rounded-t-lg w-full h-full object-cover"
          />
        </div>
        <div className="p-6 mt-6">
          <h1 className="text-xl font-bold">Card Title</h1>
          <p className="text-gray-700 mt-2">Card content goes here</p>
          <p className="text-gray-700 mt-2 text-sm">$90.00</p>
        </div>
      </div>
    </div>
  );
}
