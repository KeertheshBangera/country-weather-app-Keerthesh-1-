import React, { useState } from "react";
import { check } from "../verifyData/check";
import { AppContext } from "../contexts/AppContext";

const COUNTRY_API = "https://restcountries.com/v3.1/name";

function Country() {

  const [searchText, setSearchText] = useState("");
  const contextType = AppContext;

  handleChange = (e) => {
    setSearchText(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(COUNTRY_API+searchText)
      .then((resp) => {
        resp.json().then(data => {
          if(Array.isArray(data) && data.length){
            context.setCountry(data[0]);
            props.history.push("/country");
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  function isButtonDisabled (searchText){
    return check(searchText);
  }

    return(
      <div>
          <h2>Country</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              value={searchtext}
              onChange={handleChange}
              placeholder="Country Name"
              className="input"
            />
            <input
              type="submit"
              name="Submit"
              className="button"
              disabled={!isButtonDisabled(searchtext)}
            />
          </form>
      </div>
    );
  
}

export default Country;