import React from "react";
import { NavLink } from "react-router-dom";
import arrowreturnleft from "../assets/arrow-return-left.svg"; // importer le fichier SVG

export default function ReturnHomeBar() {
  return (
    <nav className="navLinkBar">
      <NavLink className="navLinkBar--Links" to="../disco-groove">
        <img className="iconReturn" src={arrowreturnleft} alt="" />
        <p>Retourner à l'index</p>
      </NavLink>
    </nav>
  );
}
