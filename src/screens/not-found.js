import React from "react";
import { Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import NavLink from "components/nav-link";

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Toolbar />
      <Grid container>
        <Grid item sm={12} justifyContent="center">
          <Typography component="h3" variant="h5">
            Sorry... Nothing here.
          </Typography>
          <NavLink to="/">
            <Button size="large" variant="outlined" sx={{ mt: 4 }}>
              back home
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
