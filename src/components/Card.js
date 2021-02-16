import React from "react";
import "../styles/Card.css";
import weathericon from "../img/ico/day_partial_cloud.svg";

export default function Card(props) {

  console.log(props.day);
  let dateString = new Date(props.day.dt*1000);
  let cardDate = (dateString.toLocaleDateString()).slice(0,-5);
  console.log(cardDate);

  return (
    <div className="forecast-card">
      <div className="card-body">
        <span id="date1">{cardDate}</span>
        <img id="img1" src={weathericon} />
        <span id="temp1" className="dualtemp">
        {Math.round(props.day.temp.max)}° | {Math.round(props.day.temp.min)}°
        </span>
        <span id="desc1">{props.day.weather[0].description}</span>
      </div>
    </div>
  );
}


// let cardDate = data.dt
//   dateString = new Date(cardDate*1000);
 // (not used?) console.log((dateString.toLocaleDateString()).slice(0,-5));
 //  dateElem.innerText = (dateString.toLocaleDateString()).slice(0,-5);