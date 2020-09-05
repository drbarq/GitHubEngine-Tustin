import React, { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({ data: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    console.log(searchTerm, "searchTerm");

    let results = await callBackEnd(searchTerm);
    console.log("results", results);
    setSearchResults({ data: results.data });
  };

  const callBackEnd = async (searchTerm) => {
    const response = await fetch(`/searchGitHub/${searchTerm}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    } else {
      return body;
    }
  };

  return (
    <div className="searchBar-container">
      <div className="form-container">
        <form id="searchForm" onSubmit={handleSubmit} className="form">
          <input
            id="searchTerm"
            name="searchTerm"
            required
            maxLength={256}
            className="input"
            type="text"
            value={searchTerm}
            placeholder="Search GitHub Engine"
            onChange={(event) => setSerchTerm(event.target.value)}
          />
          <button type="submit" form="searchForm" className="button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
