import React from "react";
import { Routes, Route } from "react-router-dom";
import DiscoverNews from "screens/discover";
import Navbar from "components/navbar";
import Article from "screens/article";
import NotFound from "screens/not-found";

function AuthenticatedApp() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<DiscoverNews />} />
        <Route path="/article/uuid/:uuid" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default AuthenticatedApp;
