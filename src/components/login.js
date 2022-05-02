import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import LoginForm from "./login-form";
import Modal from "./modal";

export default function Login() {
  const [isOpen, setIsOpen] = React.useState("none");

  const login = (formData) => {
    console.log("form data", formData);
  };

  const register = (formData) => {
    console.log("form data", formData);
  };

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          World News Portal
        </Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disableElevation
            onClick={() => setIsOpen("login")}
          >
            login
          </Button>
          <Button variant="outlined" onClick={() => setIsOpen("register")}>
            register
          </Button>
        </Stack>
      </Stack>

      {/* Login modal */}

      <Modal isOpen={isOpen === "login"} setIsOpen={setIsOpen}>
        <LoginForm onSubmit={login} buttonText="login" headerText="Login" />
      </Modal>

      {/* Register modal */}

      <Modal isOpen={isOpen === "register"} setIsOpen={setIsOpen}>
        <LoginForm
          onSubmit={register}
          buttonText="Register"
          headerText="Register"
        />
      </Modal>
    </Box>
  );
}
