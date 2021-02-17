import React from "react";
import "../styles/Card.css";
import Icon from "./Icon";

export default function Card (props) {

  let dateString = new Date(props.day.dt*1000);
  let cardDate = (dateString.toLocaleDateString()).slice(0,-5);  
  console.log(props.isMetric);
  return (
    <div className="forecast-card">
      <div className="card-body">
        <span id="date1">{cardDate}</span>
        <Icon icon={props.day.weather[0].main} sunrise={1} sunset={2000000000}/>
        <span id="temp1">
        {Math.round(props.day.temp.max)}° | {Math.round(props.day.temp.min)}°
        </span>
        <span id="desc1">{props.day.weather[0].description}</span>
      </div>
    </div>
  );
}
