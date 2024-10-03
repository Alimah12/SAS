import React, { useState, useEffect } from 'react';
import './WeatherForecast.css'; // Import styling
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Nairobi"); // Default location

  const API_KEY = '07d875045be065fbc2f9b8263d0e11ce'; // Replace with your OpenWeatherMap API key

  // Fetch weather data when the component mounts
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location, API_KEY]);

  // Handle form submit for location search
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  };

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <p>Get real-time weather updates for optimal farm management.</p>

      {/* Location Search Form */}
      <form onSubmit={handleSearch} className="location-form">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="btn primary">Search</button>
      </form>

      {/* Display Weather Information */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )
      )}
    </div>
  );
};
export default Weather;
