import "../App.css";
import React from "react";

export default function Navbar({simpleColors, hexColors, color, setColor}) {
    const changeToSimple = () => {
        setColor(simpleColors[Math.floor(Math.random() * simpleColors.length)]);
    }
    const changeToHex = () => {
        setColor(hexColors[Math.floor(Math.random() * hexColors.length)]);
    }

  return (
    <div className="nav">
      <div className="flipper">Color Flipper</div>
      <div>
        <span onClick={changeToSimple} className="simple">
          Simple
        </span>
        <span onClick={changeToHex} className="hex">
          Hex
        </span>
      </div>
    </div>
  );
}
