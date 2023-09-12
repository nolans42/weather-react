import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let appData = {
    city: "New York",
    temperature: 12,
    date: "Friday 18:00",
    description: "Partly Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 73,
    wind: 2,
    precipitaion: 5,
  };
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <div className="Weather">
                <form className="mb-3">
                  <div className="row">
                    <div className="col-9 d-flex">
                      <input
                        type="search"
                        placeholder="Type a city.."
                        className="form-control me-2"
                        autoComplete="on"
                      />
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary W-100"
                      />
                    </div>
                  </div>
                </form>
                <h1>{appData.city}</h1>
                <ul>
                  <li>{appData.date}</li>
                  <li>{appData.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex weather-temperature">
                    <img
                      src={appData.imgUrl}
                      alt={appData.description}
                      id="icon"
                    />
                    <strong>{appData.temperature}</strong>
                    <span className="units">ºC | ºF</span>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Precipitaion: {appData.precipitaion}%</li>
                    <li>Humidity: {appData.humidity}%</li>
                    <li>Wind: {appData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
