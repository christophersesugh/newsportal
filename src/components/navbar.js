import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import NavLink from "./nav-link";

function Navbar({ logout, user }) {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News Portal
        </Typography>
        <Button color="primary" variant="outlined" sx={{ ml: 2 }}>
          <NavLink to="/">
            Discover
            {/* <SearchIcon /> */}
          </NavLink>
        </Button>
        <Button color="primary" variant="outlined" sx={{ mx: 2 }}>
          <NavLink to="/favorite">
            Favorites
            {/* <FavoriteBorderIcon /> */}
          </NavLink>
        </Button>
        <Button color="error" variant="outlined" onClick={logout}>
          <LogoutIcon color="inherit" />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
