"use client";

import Link from "next/link";
import React, { useState, ReactElement } from "react";

interface HeaderProps {}

export default function Header({}: HeaderProps): ReactElement {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const linkClass = (link: string): string =>
    `p-4 text-center text-white font-extrabold transition-transform transform border border-gray-300 cursor-pointer ${
      activeLink === link
        ? "bg-opacity-75 text-black"
        : "hover:bg-opacity-75 hover:text-black"
    }`;

  return (
    <header>
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-center m-4">포켓몬 도감</h1>
      </Link>
      <nav>
        <ul className="grid grid-cols-3 gap-0">
          <Link href="/kanto-dex/list" passHref>
            <li
              className={`${linkClass("kanto-dex")} bg-red-500`}
              onClick={() => handleLinkClick("kanto-dex")}
            >
              관동도감
            </li>
          </Link>
          <Link href="/johto-dex/list" passHref>
            <li
              className={`${linkClass("johto-dex")} bg-green-500`}
              onClick={() => handleLinkClick("johto-dex")}
            >
              성도도감
            </li>
          </Link>
          <Link href="/hoenn-dex/list" passHref>
            <li
              className={`${linkClass("hoenn-dex")} bg-pink-700`}
              onClick={() => handleLinkClick("hoenn-dex")}
            >
              호연도감
            </li>
          </Link>
          <Link href="/sinnoh-dex/list" passHref>
            <li
              className={`${linkClass("sinnoh-dex")} bg-blue-300`}
              onClick={() => handleLinkClick("sinnoh-dex")}
            >
              신오도감
            </li>
          </Link>
          <Link href="/unova-dex/list" passHref>
            <li
              className={`${linkClass("unova-dex")} bg-gray-700`}
              onClick={() => handleLinkClick("unova-dex")}
            >
              하나도감
            </li>
          </Link>
          <Link href="/kalos-dex/list" passHref>
            <li
              className={`${linkClass("kalos-dex")} bg-blue-500`}
              onClick={() => handleLinkClick("kalos-dex")}
            >
              칼로스도감
            </li>
          </Link>
          <Link href="/alola-dex/list" passHref>
            <li
              className={`${linkClass("alola-dex")} bg-orange-200`}
              onClick={() => handleLinkClick("alola-dex")}
            >
              알로라도감
            </li>
          </Link>
          <Link href="/galar-dex/list" passHref>
            <li
              className={`${linkClass("galar-dex")} bg-purple-500`}
              onClick={() => handleLinkClick("galar-dex")}
            >
              가라르도감
            </li>
          </Link>
          <Link href="/hisui-dex/list" passHref>
            <li
              className={`${linkClass("hisui-dex")} bg-green-200`}
              onClick={() => handleLinkClick("hisui-dex")}
            >
              히스이도감
            </li>
          </Link>
          <Link href="/paldea-dex/list" passHref>
            <li
              className={`${linkClass("paldea-dex")} bg-yellow-500`}
              onClick={() => handleLinkClick("paldea-dex")}
            >
              팔데아도감
            </li>
          </Link>
        </ul>
        <Link href="/unclassified/list" passHref>
          <div
            className={`bg-gold p-4 text-center text-white font-extrabold mt-0 transition-transform transform border border-gray-300 cursor-pointer ${
              activeLink === "unclassified"
                ? "bg-opacity-75 text-black"
                : "hover:bg-opacity-75 hover:text-black"
            }`}
            onClick={() => handleLinkClick("unclassified")}
          >
            미분류
          </div>
        </Link>
      </nav>
    </header>
  );
}
