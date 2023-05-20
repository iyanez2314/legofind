"use client";
import React, { useRef } from "react";
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
  isSold: boolean;
  condition: string;
  uploadedImage?: File;
}

interface Props {
  isMarketPlace: boolean;
  setPosts?: React.Dispatch<React.SetStateAction<never[]>>;
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

// Component for the modal
export default function MarketPlaceModal({ isMarketPlace, setPosts }: Props) {
  // Inital state for the lego form
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    content: "",
    images: [],
    price: "",
    isSold: false,
    condition: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setInputs((inputs) => ({ ...inputs, uploadedImage: file }));
    }
  }

  const createNewPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    console;
    formData.append("inputs", JSON.stringify(inputs));
    formData.append("images", inputs.uploadedImage!);

    const res = await fetch("/api/marketplace/create", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setTimeout(() => {
      setLoading(false);
      handleClose();
      fetchAllPosts();
    }, 3000);
  };

  async function fetchAllPosts() {
    const res = await fetch("/api/marketplace/FetchAllPosts");
    const data = await res.json();
    setPosts!(data);
  }

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
          <MarketPlaceModalInput
            handleClose={handleClose}
            inputs={inputs}
            handleInputChange={handleInputChange}
            handleTextArea={handleTextArea}
            createNewPost={createNewPost}
            handleFileChange={handleFileChange}
            loading={loading}
          />
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
