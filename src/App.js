import React, { useState }  from "react";
import "./styles/App.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  let [forecastArr, updateForecast] = useState([]);
  let [weatherObj, updateWeather] = useState("");

  return (
    <div id="App">
      <div id="appcontainer">
        <Header updateWeather={updateWeather}/>
        <Current weather={weatherObj}/>
        <Forecast forecastArr={forecastArr}/>
      </div>
      <Footer />
    </div>
  );
}
