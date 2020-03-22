import React, { useRef } from "react";
import { COLORS } from "../../mock";

function getRandomColor() {
  return COLORS[parseInt(Math.random() * 10)];
}

export default function Card({ title, subtitle, theme }) {
  const text = useRef(getRandomColor());
  const background = useRef(getRandomColor());
  console.log(text, background);
  return (
    <div className="card">
      <div className="card-body">
        <div
          className={`image bg-soft-${background.current} ${!!theme &&
            " dark"}`}
        >
          <h1 className={`text-${text.current} ${!!theme && " dark"}`}>
            {title[0] || "A"}
          </h1>
        </div>
        <div
          className={
            "card-title text-truncate " +
            ((!!theme && " text-white-base") || " text-black-base")
          }
        >
          {title}
        </div>
        <div
          className={
            "card-subtitle text-truncate " +
            ((!!theme && " text-white-darker") || "text-black-lighter")
          }
        >
          <ul className="inline-list">
            {subtitle.map((value, index) => (
              <li key={index} className="list-item">
                <a
                  className={
                    "link" +
                    ((!!theme && " text-white-darker") || " text-black-lighter")
                  }
                  href={`#no-navigation-for-${value}`}
                >
                  {value}
                </a>
                {index < subtitle.length - 1 ? ", " : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
