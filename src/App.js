import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // async ==> send a request to server, wait for it, do something wih info
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //PAKISTAN, INDIA, UNITED STATES
            value: country.countryInfo.iso2, //PK, IN,US
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* LOOP THROUGH ALL THE COUNTRIES AND SHOW
              A DROP DOWN LIST OF THE OPTIONS */}

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
