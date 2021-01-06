import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";

import Countries from "./components/Countries";
import axios from "axios";
import Spinner from "./components/Spinner";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
      setFilteredCountries(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  onchange = (e) => {
    setSearch(e.target.value);
  };

  const searchCountries = (event) => {
    const newCountries = countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredCountries(newCountries);
  };

  const filterbyRegion = (region) => {
    if (region === "All") setFilteredCountries(countries);
    else {
      const newCountries = countries.filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase());
      });
      setFilteredCountries(newCountries);
    }
  };

  return (
    <div>
      <Search onchange={searchCountries} />
      <Filter filterbyRegion={filterbyRegion} />
      <Countries
        countryFiltered={filteredCountries}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default App;
