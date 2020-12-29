import React from "react";

const CountryItems = ({ country }) => {
  const { flag, name, population, region, capital } = country;
  return (
    <div className="countries-card">
      <div className="countries-card__flag">
        <img src={flag} alt={name} />
      </div>

      <div className="countries-card__intro">
        <h3>{name}</h3>
        <h4>Population: {population}</h4>
        <h4>Region: {region}</h4>
        <h4>Capital: {capital}</h4>
      </div>
    </div>
  );
};

export default CountryItems;
