import usePlaySoundButton from "@/hooks/usePlaySoundButton";
import Link from "next/link";
import React from "react";

interface PokemonProps {
  pokemon: Pokemon;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }): JSX.Element => {
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
        <img
          className={`h-20 w-20 sm:h-32 sm:w-32 ${
            [54, 60, 61, 62, 81, 82, 100, 101, 120, 121].includes(pokemon.id)
              ? "animate-spin-slow"
              : ""
          }`}
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
        />
      </div>
    </Link>
  );
};

export default Pokemon;
