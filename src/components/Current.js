import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Units from "./Units";

import "../styles/Current.css";

export default function Current({weatherObj}, unit) {
const [offset, setOffset] = useState("");
const [icon, setIcon] = useState("");

function convertFar(tempC) {
  return (Math.round(tempC * 1.8)+32);
}

function convertMph(kmh) {
  return (Math.round(kmh * 1.6));
}

  return weatherObj ? (
    <div className="Current">
    <h1 id="display-location">{weatherObj.name}</h1>
    <Time offset={weatherObj.timezone}/>
    <Icon icon={weatherObj.weather[0].main} sunrise={weatherObj.sys.sunrise} sunset={weatherObj.sys.sunset}/>
    <span id="display-temp">{unit ? (weatherObj.main.temp) : (convertFar(weatherObj.main.temp))}°</span>
    <Units />
    <span id="display-cond">{weatherObj.weather[0].description}</span>
    <p id="details">
      <span id="display-precip">Precipitation: {weatherObj.precipitation}</span>
      <br />
      <span id="display-humid">Humidity: {weatherObj.main.humidity}%</span>
      <br />
      <span id="display-wind">Wind: {unit ? (Math.round(weatherObj.wind.speed)) : (convertMph(weatherObj.wind.speed))}</span>
      <span id="windunit"></span>
    </p>
  </div>
    
  ) : (
    <div className="Current"><p>Loading...</p></div>
  );
}