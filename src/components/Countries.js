import React from "react";
import CountriesItems from "./CountryItems";
const Countries = ({ countryFiltered }) => {
  return (
    <div className="countries-description">
      {countryFiltered.map((country, numericCode) => {
        return <CountriesItems key={numericCode} country={country} />;
      })}
    </div>
  );
};

export default Countries;
