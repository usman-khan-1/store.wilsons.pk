import React from "react";
import HomeNavbar from "../Components/HomeNavbar.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function Layout({ children }) {
  return (
    <div>
      <HomeNavbar />
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
