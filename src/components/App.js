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
  let [appcolor, setAppcolor] = useState("#accbee");

  console.log(appcolor+" (appcolor in App)");

  let gradient = "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)";

  return (
    <div id="App">
      <div id="appcontainer" style={{ backgroundColor: appcolor }}>
        <Header updateWeather={updateWeather} updateForecast={updateForecast} weatherObj={weatherObj}/>
        <Current weatherObj={weatherObj} setIsMetric={setIsMetric} isMetric={isMetric} setAppcolor={setAppcolor}/>
        <Forecast forecastArr={forecastArr} isMetric={isMetric}/>
      </div>
      <Footer />
    </div>
  );
}