import React from "react";
import HomeNavbar from "./HomeNavbar.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import NewHomeNavbar from "./NewHomeNavbar.jsx";

function Layout({ children }) {
  return (
    <div>
      <HomeNavbar />
      {/* <NewHomeNavbar /> */}
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
