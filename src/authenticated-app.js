import React from "react";
import { Routes, Route } from "react-router-dom";
import DiscoverNews from "components/discover";
import Navbar from "components/navbar";

import { useAuth } from "auth-provider";

function AuthenticatedApp() {
  const { logout, user } = useAuth();
  return (
    <>
      <Navbar logout={logout} user={user} />
      <Routes>
        <Route path="/" element={<DiscoverNews />} />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
