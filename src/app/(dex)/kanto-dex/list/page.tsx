import PokemonList from "@/components/PokemonList";
import React from "react";

export default function ListPage() {
  return (
    <section>
      <p className="text-slate-400 text-center m-4">이스터 에그를 찾아보세요</p>
      <PokemonList />
    </section>
  );
}
