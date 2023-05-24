import React from "react";
import MarketPlaceModal from "./MarketPlaceModal";

export default function FilterNav() {
  return (
    <>
      <div className="p-6 justify-between flex items-center">
        <div className="flex flex-start">
          <h1 className="text-xl font-semibold">Marketplace</h1>
        </div>
        <div>
          <MarketPlaceModal />
        </div>
      </div>
    </>
  );
}
