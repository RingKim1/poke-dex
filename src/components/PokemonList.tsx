"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pokemon from "./Pokemon";
import fetchPokemon from "@/hooks/useFetchPokemon";
import { log } from "console";

export default function PokemonList(): React.JSX.Element {
  // const [data, setData] = useState<Pokemon[]>([]);

  // const getPokemon = async () => {
  //   const response = await fetch(`/api/pokemons`);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   const data = await response.json();
  //   setData(data);
  // };

  // console.log(data);

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  const { data, error, isPending } = useQuery<Data, Error>({
    queryKey: ["pokemons"],
    queryFn: fetchPokemon,
  });

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  const pokemonList = data?.data ?? [];

  return (
    <div className="container mx-auto flex flex-wrap">
      {pokemonList.map((pokemon: Pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
