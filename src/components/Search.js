import React from "react";

const Search = ({ onchange }) => {
  return (
    <div className="research">
      <div>
        <input
          type="text"
          onChange={onchange}
          className="research-input"
          placeholder="Search for a Country"
        />
      </div>

      <div className="countries-groups">
        <select className="research-filter">
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
