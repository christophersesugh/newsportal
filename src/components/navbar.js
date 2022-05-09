import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import NavLink from "./nav-link";
import { useAuth } from "context/auth-context";

function Navbar() {
  const { logout } = useAuth();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News Portal
        </Typography>
        <NavLink to="/">Home</NavLink>
        <LogoutIcon color="inherit" onClick={logout} sx={{ color: "red" }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
