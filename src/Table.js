import React from "react";
import "./Table.css";
function Table({ countries }) {
  return (
    <div className="table">
      {
        // map through the countries and for every country
        // split it apart and get the country and cases
        countries.map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td>
              <strong> {cases} </strong>
            </td>
          </tr>
        ))
      }
    </div>
  );
}

export default Table;
