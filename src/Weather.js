import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleReponse(reponse) {
    console.log(response.data);
    setTemperature(reponse.data.main.temp);
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
              <h2 className="mt-2">Valencia</h2>
              <ul>
                <li>Tuesday March 14, 7:00</li>
                <li>
                  <span className="temperature">{Math.round(temperature)}</span>
                  °C, Sunny
                </li>
                <li>Humidity: 57%</li>
                <li>Wind: 18 km/h</li>
              </ul>
            </div>
            <div className="col-6 my-auto py-3">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#fdd365"
                size="225"
                animate="true"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    const apiKey = "7e7903fe2939741650e77442560b44d8";
    let city = "Valencia";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleReponse);
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
