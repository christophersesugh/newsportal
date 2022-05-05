import * as React from "react";
import { Container } from "@mui/material";
import Login from "components/login";

function UnauthenticatedApp({ login, register }) {
  return (
    <Container maxWidth="md">
      <Login login={login} register={register} />
    </Container>
  );
}

export default UnauthenticatedApp;
