import React, { useContext } from "react";
import img from "./Assests/Background-.jpg";
import "./Home.css";
import { ThemeContext } from "./theme-context";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="homepage">
      <div className="imagebg">
        <img src={img} alt="" height="600px" width="100%"></img>

        <div className={themeContext.theme.containred}>
          <h2>Background Image</h2>

          <p>
            By default, the background image will repeat itself if it is smaller
            than the element where it is specified, in this case the body
            element.
          </p>

          <button className={themeContext.theme.btnred}>click here </button>
        </div>
      </div>
    </div>
  );
}
