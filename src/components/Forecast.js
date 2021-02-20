import React, { useState } from "react";
import "../styles/Forecast.css";
import Card from "./Card";
import { Roller } from 'react-spinners-css';

export default function Forecast(props) {
  const [unit, setUnit] = useState(props.isMetric);

  let forecastElements = [];

  console.log(forecastElements);

  //Object.values(array).length !== array.length;

  for (let day of props.forecastArr.slice(0,5)) {
    forecastElements = [
      ...forecastElements,
      <Card day={day} unit={props.isMetric} isReady={false}/>
    ];
    
  }

  console.log(forecastElements);

  if (Object.values(forecastElements).length === 5) {
  return (
    <div id="forecast">
      5 DAY FORECAST
      <div id="forecast-container">
        {forecastElements}
      </div>
    </div>
  );
  } else {
    return (
      <div id="forecast">
        5 DAY FORECAST
      <div id="forecast-loader">
        <Roller color="black"/>
      </div>
    </div>
    )
  }

}