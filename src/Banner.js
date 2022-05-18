import React, { useContext } from "react";
import "./Banner.css";
import cardimg from "./Assests/card-img.jpg";
import { ThemeContext } from "./theme-context";

export default function Banner() {
  const themeContext = useContext(ThemeContext);
  return (
    // three card design
    <div className="section">
      <div className="part1">
        <div className="card">
          <div className="card-image">
            <img className="image" src={cardimg} alt=""></img>
          </div>
          <div>
            <h4 className={themeContext.theme.bannercontainer}>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <button className="btn1">Coming Soon</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img className="image" src={cardimg} alt=""></img>
          </div>
          <div className="bannercontainer">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <button className="btn1">Coming Soon</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img className="image" src={cardimg} alt=""></img>
          </div>
          <div className="bannercontainer">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <button className="btn1">Coming Soon</button>
          </div>
        </div>
      </div>
      {/* // two card design */}
      <div className="part2">
        <div className="card2">
          <div className="background">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <button className="btn2">Coming Soon</button>
          </div>
        </div>
        <div className="card2">
          <div className="background">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
            <button className="btn2">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
}
