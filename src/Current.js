import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import "./styles/Current.css";


export default function Current(weather) {

  console.log(weather);
  return weather.length ? (
    <div className="Current">
    <h1 id="display-location">{weather.name}</h1>
    <p>
      <Time />
    </p>
      <Icon />
    <span id="display-temp">{weather.main.temp}°</span>
    <button id="temptoggle" type="button">
      C
    </button>
    <span id="display-cond">{weather.weather[0].description}</span>
    <p id="details">
      <span id="display-precip">Precipitation: %</span>
      <br />
      <span id="display-humid">Humidity: {weather.main.humidity}%</span>
      <br />
      <span id="display-wind">Wind: {weather.wind.speed}km/h</span>
      <span id="windunit"></span>
    </p>
  </div>
    
  ) : (
    <div className="Current"><p>Loading...</p></div>
  );
}
