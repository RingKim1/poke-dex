"use client";

import fetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import usePlaySoundButton from "@/hooks/usePlaySoundButton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function PokemonDetail(): React.JSX.Element {
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

  const specialIds = [54, 60, 61, 62, 81, 82, 100, 101, 120, 121];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-yellow-400 p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-lg font-semibold text-gray-800">No.{id}</span>
          <span className="text-lg ml-3 font-bold text-gray-800">
            {korean_name} ({name})
          </span>
        </div>
        <Link href="/kanto-dex/list" className="cursor-pointer">
          <RiArrowGoBackFill className="w-8 h-8" />
        </Link>
      </div>
      <div className="flex justify-center mb-4">
        <button onClick={playSound}>
          <Image
            className={`h-20 w-20 sm:h-32 sm:w-32 ${
              specialIds.includes(Number(id)) ? "animate-spin-slow" : ""
            }`}
            src={sprites?.front_default}
            width={80}
            height={80}
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
