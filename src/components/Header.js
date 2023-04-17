import React from "react";
import logo from "../assets/logo.webp"; // importer le fichier SVGpx

const Header = () => {
  return (
    <header className="headerContainer">
      <img className="headerLogo" src={logo} alt="" />
      <h1 className="headerTitle">
        <span className="title1">France</span>
        <span className="title2">en</span>
        <span className="title3">Transe</span>
      </h1>
    </header>
  );
};

export default Header;
