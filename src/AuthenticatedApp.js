import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "screens/home";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AuthenticatedApp;
