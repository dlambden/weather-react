import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Units from "./Units";
import { PopoverPicker } from "./PopoverPicker";

import "../styles/Current.css";

export default function Current(props) {
  const [offset, setOffset] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("#accbee");
  const [unit, setUnit] = useState(props.isMetric);

  function convertFar(tempC) {
    return (Math.round(tempC * 1.8)+32);
  }

  function convertMph(kmh) {
    return (Math.round(kmh * 1.6));
  }

  console.log(unit);
  return props.weatherObj ? (
    <div className="Current">
    <h1 id="display-location">{props.weatherObj.name}</h1>
    <Time offset={props.weatherObj.timezone}/>
    <Icon icon={props.weatherObj.weather[0].main} sunrise={props.weatherObj.sys.sunrise} sunset={props.weatherObj.sys.sunset}/>
    <span id="display-temp">{props.isMetric ? (Math.round(props.weatherObj.main.temp)) : (convertFar(props.weatherObj.main.temp))}°</span>
    <Units unit={unit} setUnit={setUnit} onChange={props.setIsMetric(unit)}/>
    <span id="display-cond">{props.weatherObj.weather[0].description}</span>
    <p id="details">
      Precipitation: {props.weatherObj.precipitation}
      <br />
      Humidity: {props.weatherObj.main.humidity}%
      <br />
      Wind: {props.isMetric ? (Math.round(props.weatherObj.wind.speed)+"km/h") : (convertMph(props.weatherObj.wind.speed)+"mph")}
    </p>
    <PopoverPicker color={color} onChange={e => {setColor(e); props.setAppcolor(e)}}/>
  </div>
    
  ) : (
    <div className="Current"><p>Loading...</p></div>
  );
}