"use client";

import fetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import usePlaySoundButton from "@/hooks/usePlaySoundButton";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>();
  const { audioRef, playSound } = usePlaySoundButton();

  const { data, error, isPending } = useQuery({
    queryKey: ["pokemons", id],
    queryFn: () => fetchPokemonDetail(id),
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

  const {
    name,
    korean_name,
    sprites,
    height,
    weight,
    types,
    abilities,
    moves,
    cries,
  } = data;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-yellow-400 p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-gray-800">No.{id}</span>
        <span className="text-lg font-bold text-gray-800">
          {korean_name} ({name})
        </span>
      </div>
      <div className="flex justify-center mb-4">
        <button onClick={playSound}>
          <img
            className={`h-32 w-32 active:animate-ping ${
              id === "54" ||
              id === "60" ||
              id === "61" ||
              id === "62" ||
              id === "81" ||
              id === "82" ||
              id === "100" ||
              id === "101" ||
              id === "120" ||
              id === "121"
                ? "animate-spin-slow"
                : ""
            }`}
            src={sprites?.front_default}
            alt={korean_name}
          />
        </button>
        <audio ref={audioRef} src={`${cries.latest}`} />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-gray-800">
          <h2 className="text-lg font-semibold mb-2">기본 정보</h2>
          <p>
            <strong>키:</strong> {height * 10} cm
          </p>
          <p>
            <strong>몸무게:</strong> {weight / 10} kg
          </p>
        </div>
        <div className="text-gray-800">
          <h2 className="text-lg font-semibold mb-2">타입</h2>
          <ul>
            {types?.map((typeData, index) => (
              <li key={index}>
                {typeData.type.korean_name} ({typeData.type.name})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">능력</h2>
        <ul className="list-disc list-inside">
          {abilities?.map((abilityData, index) => (
            <li key={index}>
              {abilityData.ability.korean_name} ({abilityData.ability.name})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">기술</h2>
        <ul className="list-disc list-inside">
          {moves?.map((moveData, index) => (
            <li key={index}>
              {moveData.move.korean_name} ({moveData.move.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
