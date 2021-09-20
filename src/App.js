import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">🌈 What's Up!</div>

        <div className="bio">I'm Janyris. I'm a Designer and Developer learning Blockchain Development. Connect your Ethereum wallet and wave at me!</div>

        <button className="waveButton" onClick={wave}>
          👋🏽 Wave at Me
        </button>
      </div>
    </div>
  );
}
