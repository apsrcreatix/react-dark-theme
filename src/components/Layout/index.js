import React from "react";

export default function Layout({ children, theme }) {
  return (
    <div
      className={"container " + (!theme ? " bg-white-base" : " bg-black-base")}
    >
      {children}
    </div>
  );
}
