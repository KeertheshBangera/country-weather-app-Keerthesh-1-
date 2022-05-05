import React from "react";
import { AppContext } from "../contexts/AppContext";

const ACCESS_KEY = "40fd9b5866122bdb08cd920c860483e5";
export const WEATHER_API = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}`;

function CountryDetails(){
  
  // const context = React.useContext(AppContext)
  const contextType = AppContext;

  const getWeatherDetails = () => {
    fetch(`${WEATHER_API}&query=${context.country?.capital?.[0]}`)
    .then((resp) => {
      resp.json().then(data => {
        context.setWeather(data);
        props.history.push("/country/weather");
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  
    const { country } = context;

    return(
      <div>
        
          <h2>Country Info</h2>
          <h3>{country.name?.common}</h3>
          <img src={country.flags.png} />
          <p>Population: {country.population}</p>
          <p>Latitude : {country.latlng?.[0]}, Longitude: {country.latlng?.[1]}</p>
          <button
            onClick={getWeatherDetails}
            className="button"
          >
            Capital Weather Details
          </button>
       
      </div>
    );
  
}

export default CountryData;