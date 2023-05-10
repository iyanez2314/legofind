import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function FilterNav() {
  return (
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
