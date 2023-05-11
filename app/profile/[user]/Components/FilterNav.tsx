import React from "react";

import MarketPlaceModal from "@/app/marketplace/components/MarketPlaceModal";

export default function FilterNav({ page }: { page: boolean }) {
  return page ? (
    <>
      <div className="p-6 justify-between flex items-center">
        <div className="flex flex-start">
          <h1 className="text-xl font-semibold">Marketplace</h1>
        </div>
        <div>
          <MarketPlaceModal isMarketPlace={true} />
        </div>
      </div>
    </>
  ) : (
    <div className="p-6 justify-between flex items-center">
      <div className="flex flex-start">
        <h1 className="text-xl font-semibold">Isaac's Legos</h1>
      </div>
      <MarketPlaceModal isMarketPlace={false} />
    </div>
  );
}
