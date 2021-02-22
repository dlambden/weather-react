import React, { useState } from "react";
import "../styles/Card.css";
import Icon from "./Icon";
import { Roller } from 'react-spinners-css';

export default function Card (props) {

  let dateString = new Date(props.day.dt*1000);
  let cardDate = (dateString.toLocaleDateString()).slice(0,-5);

  function convertFar(tempC) {
    return (Math.round(tempC * 1.8)+32);
  };

  console.log(props.isReady);

    return (
    <div className="forecast-card">
    
        {cardDate}
        <Icon icon={props.day.weather[0].main} sunrise={1} sunset={2000000000}/>
        <div id="temps">
        <span className="temphigh">
          {props.unit ? (Math.round(props.day.temp.max)) : (convertFar(props.day.temp.max))}°
        </span> 
        <span className="templow">
          {props.unit ? (Math.round(props.day.temp.min)) : (convertFar(props.day.temp.min))}°
        </span>
        </div>
        <span className="details">
          {props.day.weather[0].description}
        </span>
        
        </div>
    );
    }