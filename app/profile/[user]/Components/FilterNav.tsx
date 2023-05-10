import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import PlusSign from "/public/Icons/plus-sign.png";

export default function FilterNav({ page }: { page: boolean }) {
  return page ? (
    <>
      <div className="p-6 justify-between flex items-center">
        <div className="flex flex-start">
          <h1 className="text-xl font-semibold">Marketplace</h1>
        </div>
        <div>
          <button className="bg-purple-300 rounded p-2 cursor-pointer">
            <span>
              <Image src={PlusSign} width={30} height={30} alt="" />
            </span>
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="p-6 justify-between flex items-center">
      <div className="flex flex-start">
        <h1 className="text-xl font-semibold">Isaac's Legos</h1>
      </div>
      <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
        <ToggleButton value="web">Forsale</ToggleButton>
        <ToggleButton value="android">Sold</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
