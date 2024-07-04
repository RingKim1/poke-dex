import React from "react";
import { pokeDexImg } from "../../public/imageAddress";
import Link from "next/link";

export default function PokeDex() {
  return (
    <Link
      className="flex justify-center items-center w-full	h-full"
      href="/kanto-dex/list"
    >
      <img
        className="h-2/4 w-2/4  transform transition-transform duration-300 hover:scale-110 cursor-pointer"
        src={pokeDexImg}
        alt="포켓몬 도감 이미지"
      />
    </Link>
  );
}
