
import Country from "./pages/Country";
import CountryData from "./pages/CountryData";
import WeatherData from "./pages/WeatherData";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router(){

  return(

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Country} />
        <Route exact path="/country" component={CountryData} />
        <Route exact path="/country/weather" component={WeatherData} />
      </Switch>
    </BrowserRouter>

  );
}

export default Router;