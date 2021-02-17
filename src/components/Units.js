import React, { useState } from "react";
import "../styles/Units.css";

export default function Units(props) {

function changeUnits(event) {
  if (props.unit === false) {
    props.setUnit(true)
    } else {
    props.setUnit(false);
    }
  };

  return (
    <button id="temptoggle" type="button" onClick={changeUnits}>
    C
    </button>
  )
}