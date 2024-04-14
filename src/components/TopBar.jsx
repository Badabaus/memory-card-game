import React from "react";
import "../styles/TopBar.css";

export default function TopBar({ score = 0, highscore = 0, btnReset }) {
  return (
    <div className="TopBar">
      <div className="score">
        <span>
          <b>Memory Card Game</b>
        </span>
        <span>Score: {score}</span>
        <span>Highscore: {highscore}</span>
      </div>
    </div>
  );
}
