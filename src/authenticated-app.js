import React from "react";
import { Routes, Route } from "react-router-dom";
import DiscoverNews from "screens/discover";
import Navbar from "components/navbar";
import Article from "screens/article";
import NotFound from "screens/not-found";
import Favorite from "screens/favorite";
import Footer from "components/footer";

function AuthenticatedApp({ logout, user }) {
  return (
    <>
      <Navbar logout={logout} user={user} />
      <Routes>
        <Route path="/" element={<DiscoverNews user={user} />} />
        <Route path="/article/uuid/:uuid" element={<Article user={user} />} />
        <Route path="/favorite" element={<Favorite user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default AuthenticatedApp;
