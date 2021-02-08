import React from "react";
import "./Card.css";
import weathericon from "./img/ico/day_partial_cloud.svg";

export default function Card(prop) {
  return (
    <div className="forecast-card">
      <div className="card-body">
        <span id="date1">Date</span>
        <img id="img1" src={weathericon} />
        <span id="temp1" class="dualtemp">
          7 | 4
        </span>
        <span id="desc1">Parly Cloudy</span>
      </div>
    </div>
  );
}
