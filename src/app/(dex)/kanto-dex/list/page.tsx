import PokemonList from "@/components/PokemonList";
import React from "react";
import { FaEgg } from "react-icons/fa";

export default function ListPage(): React.JSX.Element {
  return (
    <section>
      <p className="flex justify-center items-center text-slate-400 text-center m-10">
        <FaEgg />
        이스터 에그 찾아보기
      </p>
      <PokemonList />
    </section>
  );
}
