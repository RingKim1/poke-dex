"use client";

import React from "react";

const fetchPokemonDetail = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`/api/pokemons/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default fetchPokemonDetail;
