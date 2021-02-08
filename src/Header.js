import React from "react";
import "./Header.css";

export default function Header(prop) {
  return (
    <div className="Header">
      <button id="geolocate" className="btn">
        <i class="fas fa-map-marker-alt"></i>
      </button>
      <form id="search-field">
        <input
          type="locationvalue"
          id="location-input"
          placeholder="search location"
          autocomplete="off"
          autofocus
        />
        <button type="submit" className="btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
