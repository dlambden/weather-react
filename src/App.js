import React from "react";
import "./App.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div id="appcontainer">
        <Header />
        <Current />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
