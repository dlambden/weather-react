import React from "react";
import "../styles/Time.css";

export default function Time({offset}) {

  let now = new Date();
  let localTime = now.getTime();
  let localOffset = now.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let time = new Date(utc + (1000*offset));
  let timeSplit = time.toLocaleString().split(' ');
  let shavedTime = timeSplit[1].slice(0,-3);

  return (
    <div>
    {timeSplit[0]} {shavedTime} {timeSplit[2]}
    </div>
  )
};