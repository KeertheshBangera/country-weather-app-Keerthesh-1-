import React from "react";
import { AppContext } from "../contexts/AppContext";

function WeatherData(){

  const contextType = AppContext;

  
    const { weather } = context;

    return(
      <div>
        
          <h2>Weather Details</h2>
          <h3>Temperature: {weather.current?.temperature} Celsius</h3>
          <img src={weather.current.weather_icons?.[0]} />
          <p>Wind speed: {weather.current?.wind_speed} m/s</p>
          <p>Time zone id: {weather.location?.timezone_id}</p>
      </div>
    );
  
}

export default WeatherData;