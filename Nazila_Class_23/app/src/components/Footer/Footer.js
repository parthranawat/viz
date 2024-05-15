import React from "react";
import vtLogo from "./Horizontal_VT_Full_Color_RGB.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logo" src={vtLogo} alt="Virginia Tech Logo" />
      </div>
    </div>
  );
};

export default Footer;
