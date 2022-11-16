import React from "react";
import "../CSS/Navbar.css";
import image from "../Assets/Logo.png";

export default function Navbar() {
  return (
    <div className="container">
      <img src={image} alt="Logo" />
      <div className="menu"></div>
    </div>
  );
}
