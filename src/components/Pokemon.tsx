import usePlaySoundButton from "@/hooks/usePlaySoundButton";
import Link from "next/link";
import React from "react";

interface PokemonProps {
  pokemon: Pokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const { audioRef, playSound } = usePlaySoundButton();

  return (
    <Link
      href={`/kanto-dex/list/detail/${pokemon.id}`}
      className="
        max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden 
        border-2 border-yellow-400 p-2 sm:p-4 mb-4 
        transform transition-transform duration-300 hover:rotate-12 hover:shadow-lg
      "
    >
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-base font-semibold text-gray-800">
          No.{pokemon.id}
        </span>
        <span className="text-xs sm:text-base font-bold text-gray-800">
          {pokemon.korean_name}
        </span>
      </div>
      <div className="flex justify-center mt-2 sm:mt-4">
        <button onClick={playSound}>
          <img
            className={`h-20 w-20 sm:h-32 sm:w-32 ${
              pokemon.id === 54 ||
              pokemon.id === 60 ||
              pokemon.id === 61 ||
              pokemon.id === 62 ||
              pokemon.id === 81 ||
              pokemon.id === 82 ||
              pokemon.id === 100 ||
              pokemon.id === 101 ||
              pokemon.id === 120 ||
              pokemon.id === 121
                ? "animate-spin-slow"
                : ""
            }`}
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
          />
        </button>
        <audio ref={audioRef} src={`${pokemon.cries.latest}`} />
      </div>
    </Link>
  );
}
