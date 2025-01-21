import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import ErrorAlert from './components/ErrorAlert';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = '436648f809654f83c1ca0906c7dae907'; // Replace with your Weather API key ba05636152b14d5c95962242250801
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <ErrorAlert message={error} />}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;
