import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
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
                className="me-2"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-info align-middle"
              />
            </form>
            <h2>Valencia</h2>
            <ul>
              <li>Tuesday March 14, 7:00</li>
              <li>9°C, Sunny</li>
              <li>Humidity: 57%</li>
              <li>Wind: 18 km/h</li>
            </ul>
          </div>
          <div className="col-6 my-auto">
            <p className="text-center">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#fdd365"
                size="225"
                animate="true"
              />
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
