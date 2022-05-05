import * as React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar({ logout, user }) {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News Portal
        </Typography>
        <Button color="inherit" onClick={logout}>
          <LogoutIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
