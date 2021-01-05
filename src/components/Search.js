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
    </div>
  );
};

export default Search;
