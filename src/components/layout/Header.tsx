import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-center m-4">포켓몬 도감</h1>
      </Link>
      <nav>
        <ul className="grid grid-cols-3 gap-0">
          <Link href="/kanto-dex/list">
            <li className="bg-red-500 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              관동도감
            </li>
          </Link>
          <Link href="/johto-dex/list">
            <li className="bg-green-500 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              성도도감
            </li>
          </Link>
          <Link href="/hoenn-dex/list">
            <li className="bg-pink-700 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              호연도감
            </li>
          </Link>
          <Link href="/sinnoh-dex/list">
            <li className="bg-blue-300 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              신오도감
            </li>
          </Link>
          <Link href="/unova-dex/list">
            <li className="bg-gray-700 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              하나도감
            </li>
          </Link>
          <Link href="/kalos-dex/list">
            <li className="bg-blue-500 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              칼로스도감
            </li>
          </Link>
          <Link href="/alola-dex/list">
            <li className="bg-orange-200 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              알로라도감
            </li>
          </Link>
          <Link href="/galar-dex/list">
            <li className="bg-purple-500 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              가라르도감
            </li>
          </Link>
          <Link href="/hisui-dex/list">
            <li className="bg-green-200 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              히스이도감
            </li>
          </Link>
          <Link href="/paldea-dex/list">
            <li className="bg-yellow-500 p-4 text-center text-stone-500 font-extrabold transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
              팔데아도감
            </li>
          </Link>
        </ul>
        <Link href="/unclassified/list">
          <div className="bg-gold p-4 text-center text-stone-500 font-extrabold mt-0 transition-transform transform hover:bg-opacity-75 active:bg-opacity-90 border border-gray-300 cursor-pointer">
            미분류
          </div>
        </Link>
      </nav>
    </header>
  );
}
