import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Units from "./Units";

import "../styles/Current.css";

export default function Current({data}, {isMetric}) {
const [offset, setOffset] = useState("");
const [icon, setIcon] = useState("");

function convertFar(tempC) {
  return (Math.round(tempC * 1.8)+32);
}

function convertMph(kmh) {
  return (Math.round(kmh * 1.6));
}

  console.log(data);
  return data ? (
    <div className="Current">
    <h1 id="display-location">{data.name}</h1>
    <Time offset={data.timezone}/>
    <Icon icon={data.weather[0].main} sunrise={data.sys.sunrise} sunset={data.sys.sunset}/>
    <span id="display-temp">{isMetric ? (data.main.temp) : (convertFar(data.main.temp))}°</span>
    <Units />
    <span id="display-cond">{data.weather[0].description}</span>
    <p id="details">
      <span id="display-precip">Precipitation: {data.precipitation}</span>
      <br />
      <span id="display-humid">Humidity: {data.main.humidity}%</span>
      <br />
      <span id="display-wind">Wind: {isMetric ? (data.wind.speed) : (data.wind.speed)}</span>
      <span id="windunit"></span>
    </p>
  </div>
    
  ) : (
    <div className="Current"><p>Loading...</p></div>
  );
}