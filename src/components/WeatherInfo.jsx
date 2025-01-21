import React from 'react';

function WeatherInfo({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>{weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
