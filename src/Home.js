import React from "react";
import img from "./Assests/Background-.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="image">
        <img src={img} alt="" height="500px" width="100%"></img>

        <div className="contain">
          <h2>Background Image</h2>

          <p>
            By default, the background image will repeat itself if it is smaller
            than the element where it is specified, in this case the body
            element.
          </p>

          <button className="btn">click here </button>
        </div>
      </div>
    </div>
  );
}
