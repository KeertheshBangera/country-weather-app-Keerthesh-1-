import React from "react";
export const AppContext = React.createContext(null);

export const AppProvider = (props) => {

    const [countryInfo, setCountryInfo] = React.useState({});
    const [weatherInfo, setWeatherInfo] = React.useState({});
  
    return(
      <AppContext.Provider  value={{
        country: countryInfo ,
        setCountry: setCountryInfo,
        weather: weatherInfo,
        setWeather: setWeatherInfo,
      }}>
        {props.children}
      </AppContext.Provider>
    );
  }