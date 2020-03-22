import React from "react";

export default function Header({ children, theme, handleTheme }) {
  const navlinks =
    "nav-link " + ((!theme && " text-black-base") || " text-white-base");
  const switcher =
    " " +
    ((!theme && " text-white-base bg-black-base") ||
      " text-black-base bg-white-base");
  return (
    <header
      className={
        "header " + ((!!theme && " bg-black-base") || " bg-white-base")
      }
    >
      <ul className="nav">
        <li className="nav-link text-blue ">Discover</li>
        <li className={navlinks}>Library</li>
        <li className={navlinks}>Chart</li>
        <li className={navlinks}>Radio</li>
      </ul>

      <button className={"switcher-button" + switcher} onClick={handleTheme}>
        {(!!theme && "Dark") || "Light"}
      </button>
    </header>
  );
}
