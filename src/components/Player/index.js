import React from "react";

export default function Player({ theme }) {
  let link = theme ? " text-white-base" : " text-black-base";
  return (
    <div className="player">
      <div className="controls">
        <div className="progress bg-soft-blue">
          <div className="progress-bar" style={{ width: "10%" }}></div>
        </div>
        <ul className="control-butons">
          <li className={`link control-button ${link}`}>Previous</li>
          <li className={`link control-button ${link}`}>Play</li>
          <li className={`link control-button ${link}`}>Next</li>
        </ul>
      </div>
    </div>
  );
}
