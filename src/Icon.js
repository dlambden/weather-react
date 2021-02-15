import React from "react";
import "./styles/Icon.css";
import weathericon from "./img/ico/day_partial_cloud.svg";

export default function Icon() {
  return (
    <div className="piccontainer">
      <img id="mainpic" src={weathericon} />
    </div>
  )
};

