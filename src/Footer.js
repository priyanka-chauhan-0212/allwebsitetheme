import React from "react";
import logo from "./Assests/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="logo">
          <img className="footer-logo" src={logo} alt="" />
        </div>
        <div className="footerbutton"></div>
      </div>
      <div className="footer">
        <div className="icons">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>
      <div className="footer">
        <p>
          Author: IIHT
          <br />
          <a href="#home">HOME</a> <br />
          <a href="#about">ABOUT</a> <br />
          <a href="#service">SERVICE</a> <br />
          <a href="#contact">CONTACT-US</a>
        </p>
      </div>
    </div>
  );
}
