import React, { useState } from "react";
import "../styles/Forecast.css";
import Card from "./Card";

export default function Forecast({data}, {isMetric}) {

  console.log(data);

  let forecastElements = [];

  for (let day of data) {
    forecastElements = [
      ...forecastElements,
      <Card count={day.count} />
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
