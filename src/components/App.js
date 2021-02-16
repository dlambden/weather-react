import React, { useState }  from "react";
import "../styles/App.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  let [forecastArr, updateForecast] = useState([]);
  let [weatherObj, updateWeather] = useState("");
  let [isMetric, setIsMetric] = useState(true);

  return (
    <div id="App">
      <div id="appcontainer">
        <Header updateWeather={updateWeather} updateForecast={updateForecast}/>
        <Current weatherObj={weatherObj} isMetric={isMetric}/>
        <Forecast forecastArr={forecastArr} isMetric={isMetric}/>
      </div>
      <Footer />
    </div>
  );
}