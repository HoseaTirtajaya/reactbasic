import React from "react";
import "../Navbar.css";
import MainContent from "./MainContent";
import Header from "./Header";
import Footer from "./Footer";

function Navbar() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Navbar;
