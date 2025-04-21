import React, { useState } from "react"; // Remove useEffect
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "db9ed6e0939f80d429bdbd81d2f0ca63";  // API Key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      console.error("API Error:", err.response ? err.response.data : err.message);
      setError("Failed to fetch weather data. Please check the location and try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherData(location);
    } else {
      setError("Please enter a city name.");
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Application</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default WeatherApp;