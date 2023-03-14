import React from "react";

export default function Weather() {
  return (
    <div className="container mx-5 border-info">
      <div>
        <form>
          <input type="search" placeholder="Type a city..." />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>Valencia</h2>
          <p>Tuesday March 14, 7:00</p>
          <p>9°C, Sunny</p>
          <p>Humidity: 57%</p>
          <p>Wind: 18 km/h</p>
        </div>
        <div className="col-6">
          <h1>🌞</h1>
        </div>
      </div>
    </div>
  );
}
