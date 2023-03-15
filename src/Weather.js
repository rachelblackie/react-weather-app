import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleReponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container mx-5 border border-info border-3 rounded">
          <div></div>
          <div className="row">
            <div className="col-6">
              <form className="mt-4">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="me-2 type-city-field"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-info align-middle"
                />
              </form>
              <h2 className="mt-2 city">{weatherData.city}</h2>
              <ul>
                <li>Tuesday March 14, 7:00</li>
                <li>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  °C,{" "}
                  <span className="description">{weatherData.description}</span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>

                <li>
                  Wind: <span className="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
            <div className="col-6 my-auto py-3">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#fdd365"
                size="225"
                animate="true"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "244c95t3fo3db4e37613c8eecb30fba3";
    let city = "Valencia";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleReponse);
    return (
      <div>
        <h1 className="text-center my-auto">Loading...</h1>
      </div>
    );
  }
}
