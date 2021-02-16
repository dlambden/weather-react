import React from "react";
import "../styles/Card.css";
import weathericon from "../img/ico/day_partial_cloud.svg";

export default function Card(props) {

  return (
    <div className="forecast-card">
      <div className="card-body">
        <span id="date1">date</span>
        <img id="img1" src={weathericon} />
        <span id="temp1" className="dualtemp">
        ↑ | ↓
        </span>
        <span id="desc1">conditions</span>
      </div>
    </div>
  );
}
