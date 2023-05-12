"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlusSign from "/public/Icons/plus-sign.png";
import Image from "next/image";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MarketPlaceModalInput from "./MarketPlaceModalInput";

export interface Inputs {
  title: string;
  content: string;
  images: string[];
  price: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function MarketPlaceModal({
  isMarketPlace,
}: {
  isMarketPlace: boolean;
}) {
  // Inital state for the lego form
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    content: "",
    images: [],
    price: "",
  });

  // Handle the state of the modal being open or closed
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return isMarketPlace ? (
    <div>
      <Button
        onClick={handleOpen}
        className="bg-purple-300 rounded p-3 cursor-pointer"
      >
        <span>
          <Image src={PlusSign} width={25} height={25} alt="" />
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MarketPlaceModalInput handleClose={handleClose} inputs={inputs} />
        </Box>
      </Modal>
    </div>
  ) : (
    <>
      <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
        <ToggleButton value="web">Forsale</ToggleButton>
        <ToggleButton value="android">Sold</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
