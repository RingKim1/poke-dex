"use client";

import React from "react";

// const fetchPokemon = async (): Promise<Pokemon[]> => {
//   const response = await fetch(`/api/pokemons`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return response.json();
// };

// export default fetchPokemon;

const fetchPokemon = async (): Promise<Data> => {
  const response = await fetch(`/api/pokemons`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default fetchPokemon;
