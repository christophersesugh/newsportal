import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link
      {...props}
      style={{
        textDecoration: "none",
        color: "inherit",
        marginRight: "10px",
      }}
    />
  );
}

export default NavLink;
