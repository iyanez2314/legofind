"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthModalInput from "./AuthModalInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        className={
          isSignin
            ? `${"text-sm font-semibold text-indigo"}`
            : `${"rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all ease-in-out duration-200"}`
        }
      >
        {isSignin ? "Login" : "Sign up for free"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AuthModalInput isSignin={isSignin} inputs={inputs} />
        </Box>
      </Modal>
    </div>
  );
}
