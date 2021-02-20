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
  let [appcolor, setAppcolor] = useState("#8263DD");

  console.log(appcolor+" (appcolor in App)");


  return (
    <div id="App">
      <div id="appcontainer" style={{ backgroundImage: `linear-gradient(to top, ${appcolor} 0%, #ffffff 110%)` }}>
        <Header updateWeather={updateWeather} updateForecast={updateForecast} weatherObj={weatherObj}/>
        <Current weatherObj={weatherObj} setIsMetric={setIsMetric} isMetric={isMetric} setAppcolor={setAppcolor}/>
        <Forecast forecastArr={forecastArr} isMetric={isMetric}/>
      </div>
      <Footer />
    </div>
  );
}