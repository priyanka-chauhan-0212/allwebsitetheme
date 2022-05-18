import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "./theme-context";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="header">
      <ul className="navheader">
        <li className="sample">
          <a className={themeContext.theme.menu} href="#home">
            Home
          </a>
        </li>
        <li className="sample">
          <a className={themeContext.theme.menu} href="#news">
            News
          </a>
        </li>
        <li className={themeContext.theme.menubar}>
          <a className={themeContext.theme.menu} href="#contact">
            Contact
          </a>
        </li>
        <li className={themeContext.theme.menubar}>
          <a className={themeContext.theme.menu} href="#about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
