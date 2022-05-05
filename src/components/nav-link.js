import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  // const match = useMatch(props.to);
  return (
    <Link
      {...props}
      style={{
        textDecoration: "none",
      }}
    />
  );
}

export default NavLink;
