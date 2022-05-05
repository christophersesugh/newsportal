import React from "react";
import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";

function Favorite() {
  return (
    <Container maxWidth="md">
      <Toolbar />
      <Grid container>
        <Grid item lg={12} justifyContent="center">
          <Box>
            <Typography component="h1">FAvorite articles</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Favorite;
