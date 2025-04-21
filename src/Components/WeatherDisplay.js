// src/Components/WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;
  const { temp, temp_min, temp_max, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <p><strong>Temperature:</strong> {temp}°C</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Min Temp:</strong> {temp_min}°C</p>
        <p><strong>Max Temp:</strong> {temp_max}°C</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;