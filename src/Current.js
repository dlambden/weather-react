import React from "react";
import "./Current.css";
import weathericon from "./img/ico/day_partial_cloud.svg";

export default function Current(prop) {
  return (
    <div id="Current">
      <h1 id="display-location">Vancouver</h1>
      <p>
        <span id="display-time">Last updated: 1/27/2021, 8:00 PM</span>
      </p>
      <div className="piccontainer">
        <img id="mainpic" src={weathericon} />
      </div>
      <span id="display-temp">7°</span>
      <button id="temptoggle" type="button">
        C
      </button>
      <span id="display-cond">Partly Cloudy</span>
      <p id="details">
        <span id="display-precip">Precipitation: 83%</span>
        <br />
        <span id="display-humid">Humidity: 81%</span>
        <br />
        <span id="display-wind">Wind: 7km/h</span>
        <span id="windunit"></span>
      </p>
    </div>
  );
}
