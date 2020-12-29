import React, { useState, useEffect } from "react";
import Search from "./components/Search";

import Countries from "./components/Countries";
import axios from "axios";
import Spinner from "./components/Spinner";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  onchange = (e) => {
    setSearch(e.target.value);
  };

  const countryFiltered = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Search onchange={onchange} />
      <Countries
        countryFiltered={countryFiltered}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default App;
