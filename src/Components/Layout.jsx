import React from "react";
import HomeNavbar from "../Components/HomeNavbar.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div>
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
