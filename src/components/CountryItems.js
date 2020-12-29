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
        <h4>
          <strong>Population:</strong> {population}
        </h4>
        <h4>
          <strong>Region</strong>: {region}
        </h4>
        <h4>
          <strong>Capital</strong>: {capital}
        </h4>
      </div>
    </div>
  );
};

export default CountryItems;
