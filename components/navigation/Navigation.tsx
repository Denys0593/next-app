"use client";

import Link from "next/link";
import "./navigation.css";
import { useState } from "react";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const nav = document.querySelector("nav");
  const butToShow = document.querySelector("#butToShow") as HTMLButtonElement;
  const butToHide = document.querySelector("#butToHide") as HTMLButtonElement;

  function showMainNav() {
    butToShow?.classList.add("hide");
    nav?.classList.add("show");
  }

  function hideMainHav() {
    setShowNav(false);
    butToShow?.classList.remove("hide");
    nav?.classList.remove("show");
  }

  showNav ? showMainNav() : null;

  return (
    <div
      onMouseLeave={hideMainHav}
      style={{ zIndex: 1, position: "relative", marginLeft: "15px" }}
    >
      <button
        onMouseEnter={() => setShowNav(true)}
        id="butToShow"
        className="buttonShowNav uppercase underline underline-offset-8"
      >
        navigation
      </button>
      <nav className="hide">
        <ul className="ulNav">
          <li>
            <button className="blue">
              <Link href="/films">Films</Link>
            </button>
          </li>
          <li>
            <button className="yellow">
              <Link href="/vehicles">Vehicles</Link>
            </button>
          </li>
          <li>
            <button className="blue">
              <Link href="/people">People</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
