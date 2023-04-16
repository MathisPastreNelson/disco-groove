import React from "react";
import logo from "../assets/logo.webp"; // importer le fichier SVGpx

const Header = () => {
  return (
    <header className="headerContainer">
      <img className="headerLogo" src={logo} alt="" />
      <h1 className="headerTitle">Disco Groove</h1>
    </header>
  );
};

export default Header;
