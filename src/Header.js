import React, { useState } from "react";
import axios from "axios";
import "./styles/Header.css";

export default function Header(props) {
  const [location, setLoc] = useState("");

  const apiKey = `3bfeb5b01631989c9755b5bc4d802195`;

  function handleSubmit(event) {
    event.preventDefault();
    if (location.length > 0) {
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
      axios
        .get(apiURL)
        .then(function retrieveData(response){
          props.updateWeather(response.data);
        })
        .catch(function (error) {
          alert("Location cannot be found. Please try your search again.");
        });
    } else {
      alert("Enter a city to view current.");
    }
  }

  function updateLoc(event) {
    setLoc(event.target.value);
  }

  function geoHandler(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  
  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios
      .get(apiURL)
      .catch(function(error) {
        alert("Your location was not found.");
      });
  }

  return (
    <div id="Header">
      <button id="geolocate" onClick={geoHandler} className="btn">
        <i className="fas fa-map-marker-alt"></i>
      </button>
      <form id="search-field" onSubmit={handleSubmit}>
        <input
          type="location"
          id="location-input"
          placeholder="search location"
          onChange={updateLoc}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" value="Submit" className="btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
