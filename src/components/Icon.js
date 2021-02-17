import React from "react";
import "../styles/Icon.css";
import clearday from "../img/ico/day_clear.svg";
import clearnight from "../img/ico/night_half_moon_clear.svg";
import cloudyday from "../img/ico/day_partial_cloud.svg";
import cloudynight from "../img/ico/night_half_moon_partial_cloud.svg";
import rain from "../img/ico/rain.svg";
import drizzleday from "../img/ico/day_rain.svg";
import drizzlenight from "../img/ico/night_half_moon_rain.svg";
import snowday from "../img/ico/snow.svg";
import snownight from "../img/ico/night_half_moon_snow.svg";
import stormday from "../img/ico/rain_thunder.svg";
import stormnight from "../img/ico/night_half_moon_rain_thunder.svg";
import fogmist from "../img/ico/mist.svg";


export default function Icon(props) {

  function calcIcon(test, forecast=false) {
    let sunUp = forecast ? true : (Date.now() >= (props.sunrise*1000) && Date.now() < (props.sunset*1000));
    if (test === "Clear") {
      return sunUp ? clearday : clearnight;
    } 
    else if (test === "Clouds") {
      return sunUp ? cloudyday : cloudynight;
    }
    else if (test === "Rain") {
      return sunUp ? rain : rain;
    }
    else if (test === "Drizzle") {
      return sunUp ? drizzleday : drizzlenight;
    }
    else if (test === "Snow") {
      return sunUp ? snowday : snownight;
    }
    else if (test === "Thunderstorm") {
      return sunUp ? stormday : stormnight;
    } else {
      return fogmist;
    }
  }

  return (
    <div className="piccontainer">
     <img id="icon" src={calcIcon(props.icon)} />
    </div>
  )
};

