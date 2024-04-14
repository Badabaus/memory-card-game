import React, { useEffect, useState } from "react";

export default function FetchPokemon() {
  const array = [];
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      let rndPokemonId = Math.floor(Math.random() * 500 + 1);
      const fetchPokemon = async () => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${rndPokemonId}`
        );
        const data = await response.json();

        setPokemon(data);
        console.log(data);
      };
      fetchPokemon();
      array.push(...array, [
        {
          name: pokemon.name,
          sprites: pokemon.sprites?.front_default,
        },
      ]);
    }
  }, []);
  return array;
}
