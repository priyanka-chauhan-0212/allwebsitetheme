import React from "react";
import "./Banner.css";
import cardimg from "./Assests/card-img.jpg";

export default function Banner() {
  return (
    <div className="wrapper">
      <div className="card">
        <img className="cardimage" src={cardimg} alt=""></img>
        <div className="bannercontainer">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
          <button>Coming Soon</button>
        </div>
      </div>
    </div>
  );
}
