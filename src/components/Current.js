import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Units from "./Units";
import { PopoverPicker } from "./PopoverPicker";
import { Roller } from 'react-spinners-css';


import "../styles/Current.css";

export default function Current(props) {
  const [offset, setOffset] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("#a485ff");
  const [unit, setUnit] = useState(props.isMetric);

  function convertFar(tempC) {
    return (Math.round(tempC * 1.8)+32);
  }

  function convertMph(kmh) {
    return (Math.round(kmh * 1.6));
  }

  console.log(unit+" (unit in Current)");

  return props.weatherObj ? (
    <div className="Current">
      
      <div id="left-col">
          <h1>{props.weatherObj.name}</h1>
          <Time offset={props.weatherObj.timezone}/>
          <Icon icon={props.weatherObj.weather[0].main} sunrise={props.weatherObj.sys.sunrise} sunset={props.weatherObj.sys.sunset}/>
      </div>

      
      <div id="right-col">

          <div id="tempcontainer">
            <div id="temp">
             {props.isMetric ? (Math.round(props.weatherObj.main.temp)) : (convertFar(props.weatherObj.main.temp))}°
            </div>
            <Units unit={unit} setUnit={setUnit} onChange={props.setIsMetric(unit)}/>
          </div>

            <h2 id="descrip">{props.weatherObj.weather[0].description}</h2>
          

            <div id="details">
              Precipitation: {props.weatherObj.precipitation}
              <br />
              Humidity: {props.weatherObj.main.humidity}%
              <br />
              Wind: {props.isMetric ? (Math.round(props.weatherObj.wind.speed)+"km/h") : (convertMph(props.weatherObj.wind.speed)+"mph")}
            </div>
        
      </div>
      
      <PopoverPicker color={color} onChange={e => {setColor(e); props.setAppcolor(e)}}/>
    </div>
    
  ) : (
    <div className="Current">
      <div id="loader">
        <Roller color="black"/>
      </div>
    </div>
  );
}