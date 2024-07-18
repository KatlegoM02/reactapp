import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // Initialize state for weather data and city
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  // Handle the API response and update the weather data state
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  // Handle the form submission to trigger the search function
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  // Update the city state when the input value changes
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // Perform the API call to get weather data for the specified city
  function search() {
    const apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  // Render the component based on whether the weather data is ready
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              {/* Input for city name */}
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              {/* Submit button for the form */}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        {/* Display the weather information */}
        <WeatherInfo data={weatherData} />
        {/* Display the weather forecast based on the coordinates */}
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    // If the data is not ready, initiate a search and show a loading message
    search();
    return "Loading...";
  }
}
