import React from "react";

export default function MarketPlaceFilter() {
  return (
    <div className="w-80 h-[500px] p-4 overflow-y-auto -mt-3">
      <div className="text-black border-b pb-4 flex flex-col mt-3 capitalize">
        <h3 className="text-2xl font-bold mb-4 border-b ">Filters</h3>
        <h3 className="text-xl font-bold mb-4">Lego Types</h3>
        <p className="cursor-pointer">Star wars</p>
        <p>Harry Potter</p>
        <p>Technic</p>
      </div>
      <div className="text-black border-b pb-4 flex flex-col mt-3">
        <h3 className="text-xl font-bold mb-4">Price Ranges</h3>
        <p>$0-$50</p>
        <p>$50-$100</p>
        <p>$100+</p>
      </div>
      <div className="text-black border-b pb-4 flex flex-col mt-3 capitalize">
        <h3 className="text-xl font-bold mb-4">Extra</h3>
        <p>Fully built</p>
        <p>In Box Sealed</p>
        <p>Open Box</p>
      </div>
    </div>
  );
}
