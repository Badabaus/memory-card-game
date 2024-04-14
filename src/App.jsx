import { useEffect, useState } from "react";
import "./styles/app.css";
import CardMap from "./components/CardMap";
import TopBar from "./components/TopBar";

function App() {
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(true);
  const [highscore, setHighscore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const endGame = () => {
    console.log("Leider verloren");
    if (score > highscore) {
      setHighscore(score);
    }
    setReset(true);
    setGameOver(true);
  };

  const actualScore = () => {
    setScore(score + 1);
    setReset(false);
  };

  const resetScore = () => {
    setScore(0);
    setGameOver(false);
  };

  const handleNewGame = () => {
    resetScore();
  };
  return (
    <>
      <TopBar score={score} highscore={highscore} />
      <main>
        <div className="card-board">
          <CardMap endGame={endGame} reset={reset} actualScore={actualScore} />
          {gameOver && (
            <div className="gameover">
              <h3>Spiel vorbei!</h3>
              <h4>Du hast {score} Punkte erreicht!</h4>
              <button onClick={handleNewGame}>Neue Runde</button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
