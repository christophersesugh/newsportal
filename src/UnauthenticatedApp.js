import * as React from "react";
import { Container } from "@mui/material";
import Login from "components/login";

function UnauthenticatedApp() {
  return (
    <Container maxWidth="md">
      <Login />
    </Container>
  );
}

export default UnauthenticatedApp;
