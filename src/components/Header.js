import React, { useState } from "react";
import axios from "axios";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  const [location, setLoc] = useState("Vancouver");

  const apiKey = `86647240c453f3a54487d7b1be9884ad`;

  function updateData(response) {
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let hourlyPrecip = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${apiKey}&units=metric`;
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    
    axios.get(hourlyPrecip).then(function(res) {
      response.data.precipitation = Math.round((Number(res.data.hourly[0].pop)) * 100) + '%';
      props.updateWeather(response.data);
      setLoc("");
    });

    axios.get(forecastURL).then(function (resp) {
      props.updateForecast(resp.data.daily);
    });
  }

  function searchCity(location) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios
    .get(apiURL)
    .then(updateData)
    .catch(function (error) {
      alert("The city you entered cannot be found. Please try again.");
      setLoc("");
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (location.length > 0) {
      searchCity(location)
    } else {
      alert("Enter a city name to search.");
    }
    event.target.reset();
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
      .then(updateData)
      .catch(function(error) {
        alert("Geolocate failed.");
      });
  }
 
  // searchCity("Vancouver");

  console.log(props.weatherObj.name);
    
  if (props.weatherObj.name === undefined) {
    searchCity(location);
  }



  return (
    <div id="Header">
      <button id="geolocate" onClick={geoHandler} >
        <FontAwesomeIcon icon={faGlobe} />
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
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  
  )
}
