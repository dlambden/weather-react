import React, { useState } from "react";
import "../styles/Forecast.css";
import Card from "./Card";

export default function Forecast(props) {
  const [unit, setUnit] = useState(props.isMetric);

  let forecastElements = [];

  for (let day of props.forecastArr.slice(0,5)) {
    forecastElements = [
      ...forecastElements,
      <Card day={day} unit={props.isMetric}/>
    ];
  }

  return (
    <div id="forecast">
      5 DAY FORECAST
      <div id="forecast-container">
        {forecastElements}
      </div>
    </div>
  );
}
