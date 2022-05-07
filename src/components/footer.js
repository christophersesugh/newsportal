import React from "react";
import { Paper, Toolbar } from "@mui/material";

function Footer() {
  return (
    <>
      <Toolbar />
      <Paper
        elevation={2}
        component="footer"
        sx={{
          width: "auto",
          height: "100px",
          display: "grid",
          placeItems: "center",
          borderTop: "1px solid dodgerblue",
        }}
      >
        footer
      </Paper>
    </>
  );
}

export default Footer;
