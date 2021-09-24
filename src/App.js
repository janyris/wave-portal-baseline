import React,{ useEffect } from "react";
import { ethers } from "ethers";
import './App.css';

const App = () => {
const checkIfWalletIsConnected = () => {



const { ethereum } = window;


if (!ethereum) {
  console.log("Make sure you have metamask!");
  return;
} else {
  console.log("We have the ethereum object", ethereum);
  }
}

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">🌈 What's Up!</div>

        <div className="bio">I'm Janyris. I'm a Designer and Developer learning Blockchain Development. Connect your Ethereum wallet and wave at me!</div>

        <button className="waveButton" onClick={null}>
          👋🏽 Wave at Me
        </button>
      </div>
    </div>
  );
}

export default App
