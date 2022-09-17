import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
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

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* LOOP THROUGH ALL THE COUNTRIES AND SHOW
              A DROP DOWN LIST OF THE OPTIONS */}

            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>
                {country.name}
                {/* country.value and country.name aisy hmy mily h k upr hm ne inhy istrh map kiya hei
              in getCountriesData's FUNCTION */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
        <InfoBox title="Recoverd" cases={1234} total={3000} />
        <InfoBox title="Deaths" cases={12345} total={4000} />
      </div>

      <Map />
    </div>
  );
}

export default App;
