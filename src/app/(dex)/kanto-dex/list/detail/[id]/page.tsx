import PokemonDetail from "@/components/PokemonDetail";
import React from "react";

export default function DetailPage(): React.JSX.Element {
  return (
    <div>
      <p className="text-slate-400 text-center m-10">포켓몬을 클릭!</p>
      <PokemonDetail />
    </div>
  );
}
