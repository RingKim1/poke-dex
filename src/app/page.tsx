import PokeDex from "@/components/PokeDex";
import { Metadata } from "next";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <PokeDex />
    </div>
  );
}
