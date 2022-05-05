import React from "react";
import { Container, Grid, Toolbar } from "@mui/material";

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Toolbar />
      <Grid container>
        <Grid item sm={12} justifyContent="center">
          not found
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
