import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2">
        <div className="Tilt-inner pa3">
          <h1>
            <img src={brain} alt="logo" />
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
