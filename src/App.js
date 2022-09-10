import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["PAK", "USA", "UK"]);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* LOOP THROUGH ALL THE COUNTRIES AND SHOW
              A DROP DOWN LIST OF THE OPTIONS */}

            {countries.map((country) => (
              <MenuItem>{country} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
