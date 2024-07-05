import PokeDex from "@/components/PokeDex";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      <PokeDex />
    </div>
  );
}
