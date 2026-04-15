import React from 'react'
import SearchBox  from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "City name",
    feels_like: 0.00,
    temp: 0.00,
    temp_min: 0.00,
    humidity: 0,
    weather: "type",
    isInitial: true
  });
  let updateInfo = function(newInfo){
    setWeatherInfo(newInfo);
  }

  let inlineStyles = {
  backgroundImage: "linear-gradient(to bottom right, #e0f7fa, #80deea)",
  textAlign: "center",
  minHeight: "100vh", 
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px"
};

  return (
    <div style={inlineStyles} >
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default Weather
