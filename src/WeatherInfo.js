import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="float-start">
      <h2 className="mt-2 city">{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          °C,{" "}
          <span className="description text-capitalize">
            {props.data.description}
          </span>
        </li>
        <li>
          Humidity: <span className="humidity">{props.data.humidity}</span> %
        </li>

        <li>
          Wind: <span className="wind">{props.data.wind}</span> km/h
        </li>
      </ul>
    </div>
  );
}
