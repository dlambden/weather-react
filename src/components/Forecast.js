import React, { useState } from "react";
import "../styles/Forecast.css";
import Card from "./Card";

export default function Forecast({forecastArr}, {isMetric}) {
  

  let forecastElements = [];

  for (let day of forecastArr.slice(0,5)) {
    forecastElements = [
      ...forecastElements,
      <Card day={day} />
    ];
  }

  return (
    <div className="col forecast">
      <p>5 DAY FORECAST</p>
      <div className="forecast-container">
        {forecastElements}
      </div>
    </div>
  );

}
