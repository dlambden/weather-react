import React from "react";
import "./Forecast.css";
import Card from "./Card";
import weathericon from "./img/ico/day_partial_cloud.svg";

export default function Forecast(prop) {
  return (
    <div className="col forecast">
      <p>5 DAY FORECAST</p>
      <div className="forecast-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
