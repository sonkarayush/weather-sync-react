import { useState } from "react";
import Dashboard from "./Dashboard";
import "./Weather.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80";

const emptyWeather = {
  isInitial: true,
  city: "",
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  humidity: 0,
  feelsLike: 0,
  weather: "",
  weatherMain: "",
  icon: "",
  windSpeed: 0,
  visibility: 0,
  cloudCover: 0,
  timezone: 0,
  country: "",
  forecast: [],
};

function getFiveDayForecast(list, timezone) {
  const forecast = [];
  const usedDates = [];

  for (let i = 0; i < list.length && forecast.length < 5; i++) {
    const item = list[i];
    const dateLabel = new Date((item.dt + timezone) * 1000).toLocaleDateString();

    if (usedDates.includes(dateLabel)) {
      continue;
    }

    usedDates.push(dateLabel);
    forecast.push({
      dt: item.dt,
      tempMax: item.main.temp_max,
      tempMin: item.main.temp_min,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    });
  }

  return forecast;
}

export default function Weather() {
  const [weather, setWeather] = useState(emptyWeather);
  const [recentCities, setRecentCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addRecentCity(city) {
    const updated = [
      city,
      ...recentCities.filter((item) => item.toLowerCase() !== city.toLowerCase()),
    ].slice(0, 5);

    setRecentCities(updated);
  }

  async function searchCity(city) {
    setError("");
    setLoading(true);

    try {
      if (!API_KEY) {
        throw new Error("Add VITE_WEATHER_API_KEY to your .env file.");
      }

      const query = encodeURIComponent(city.trim());
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`;

      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      if (weatherData.cod === "404" || weatherData.cod === 404) {
        throw new Error("City not found. Please check the spelling and try again.");
      }

      if (!weatherResponse.ok) {
        throw new Error(weatherData.message || "Unable to fetch weather.");
      }

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      if (!forecastResponse.ok) {
        throw new Error(forecastData.message || "Unable to fetch forecast.");
      }

      const result = {
        isInitial: false,
        city: weatherData.name,
        temp: weatherData.main.temp,
        tempMin: weatherData.main.temp_min,
        tempMax: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        feelsLike: weatherData.main.feels_like,
        weather: weatherData.weather[0].description,
        weatherMain: weatherData.weather[0].main,
        icon: weatherData.weather[0].icon,
        windSpeed: weatherData.wind?.speed || 0,
        visibility: weatherData.visibility ?? 0,
        cloudCover: weatherData.clouds?.all ?? 0,
        timezone: weatherData.timezone,
        country: weatherData.sys.country,
        forecast: getFiveDayForecast(forecastData.list, forecastData.city.timezone),
      };

      setWeather(result);
      addRecentCity(result.city);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="weather-page">
      <div
        className="background-photo"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      />
      <div className="background-overlay" />

      <Dashboard
        weather={weather}
        recentCities={recentCities}
        loading={loading}
        error={error}
        onSearch={searchCity}
      />
    </div>
  );
}
