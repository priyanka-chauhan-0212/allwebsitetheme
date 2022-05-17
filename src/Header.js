import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <ul className="nav-header">
        <li className="menubar">
          <a className="menu" href="#home">
            Home
          </a>
        </li>
        <li className="menubar">
          <a className="menu" href="#news">
            News
          </a>
        </li>
        <li className="menubar">
          <a className="menu" href="#contact">
            Contact
          </a>
        </li>
        <li className="menubar">
          <a className="menu" href="#about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
