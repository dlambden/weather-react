import React, { useState } from "react";
import "../styles/Units.css";

export default function Units(props) {
const [currentUnit, setCurrentUnit] = useState("C");

function changeUnits(event) {
  if (props.unit === true) {
    props.setUnit(false);
    setCurrentUnit("F");
    } else {
    props.setUnit(true);
    setCurrentUnit("C");
    }
  };
  
  return (
    <button id="temptoggle" type="button" onClick={changeUnits}>
     {currentUnit}
    </button>
  )
}