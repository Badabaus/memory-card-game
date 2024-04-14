import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import "../styles/card-map.css";

export default function CardMap({ endGame, actualScore, reset }) {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let rndNumbersList = [];
    const fetchPokemon = async (rndPokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${rndPokemonId}`
      );
      const data = await response.json();
      setPokemon((prevPokemon) => [...prevPokemon, data]);
    };

    for (let i = 0; i < 12; i++) {
      let rndPokemonId;
      do {
        rndPokemonId = Math.floor(Math.random() * 50 + 1);
      } while (rndNumbersList.includes(rndPokemonId));

      if (rndNumbersList.includes(rndPokemonId)) {
        rndPokemonId = Math.floor(Math.random() * 50 + 1);
      }
      rndNumbersList.push(rndPokemonId);
      fetchPokemon(rndPokemonId);
    }
  }, []);

  useEffect(() => {
    setPositions(pokemon.map((value, index) => index));
    setIsLoading(false);
  }, [pokemon]);

  const shuffleArray = (array) => {
    const sortedArr = [...array];
    for (let i = sortedArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
    }
    return sortedArr;
  };

  function randomizeArray() {
    setPositions(shuffleArray(positions));
  }

  return (
    <>
      {positions.map((position) =>
        pokemon[position] ? (
          <Card
            key={pokemon[position].name}
            image={
              isLoading ? <Loading /> : pokemon[position].sprites.front_default
            }
            name={pokemon[position].name}
            endGame={endGame}
            randomizeArray={randomizeArray}
            actualScore={actualScore}
            reset={reset}
          />
        ) : null
      )}
    </>
  );
}
