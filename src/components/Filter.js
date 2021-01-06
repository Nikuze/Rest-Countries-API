import React from "react";

const Filter = ({ filterbyRegion }) => {
  return (
    <div className="countries-groups">
      <select
        className="research-filter"
        onChange={(event) => filterbyRegion(event.target.value)}
      >
        <option value="All">All</option>
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
