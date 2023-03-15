import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "244c95t3fo3db4e37613c8eecb30fba3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container mx-5 border border-info border-3 rounded">
          <div></div>
          <div className="row">
            <div className="col-6">
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="search"
                  autoFocus="on"
                  placeholder="Type a city..."
                  className="me-2 type-city-field"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-info align-middle"
                />
              </form>
              <WeatherInfo data={weatherData} />
            </div>
            <div className="col-6 my-auto py-3">
              <WeatherIcon code={weatherData.icon} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h1 className="text-center my-auto">Loading...</h1>
      </div>
    );
  }
}
