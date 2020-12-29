import React from "react";

const Search = ({ onchange }) => {
  return (
    <div>
      <input type="text" className="search" onChange={onchange} />
    </div>
  );
};

export default Search;
