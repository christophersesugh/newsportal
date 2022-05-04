import DiscoverNews from "components/discover";
import React from "react";
import { Routes, Route } from "react-router-dom";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<DiscoverNews />} />
    </Routes>
  );
}

export default AuthenticatedApp;
