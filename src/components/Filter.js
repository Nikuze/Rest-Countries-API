import React from "react";

const Filter = ({ setRegion }) => {
  return (
    <div className="countries-groups">
      <select
        className="research-filter"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
