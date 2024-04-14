import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import Loading from "./Loading";

export default function Card({
  image,
  name,
  endGame,
  randomizeArray,
  isLoading,
  actualScore,
  reset,
}) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsClicked(false);
    }
  }, [reset]);

  async function handleOnClick() {
    setIsClicked(!isClicked);
    if (!isClicked) {
      actualScore();
    } else {
      endGame();
      return;
    }
    randomizeArray();
  }

  return (
    <div
      className="divContainer"
      onClick={() => {
        handleOnClick();
      }}
    >
      {isLoading && <Loading />}
      <img className="Image" src={image} width={200} height={200} />

      <div className="divName">
        <p className="upper">{name}</p>
      </div>
    </div>
  );
}
