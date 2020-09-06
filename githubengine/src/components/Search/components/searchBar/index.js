import React, { useState } from "react";
import "./styles.scss";

import SearchResultRenders from "./components/searchResultRenders";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({
    searchedTerm: "",
    data: {
      items: [],
      incomplete_results: null,
      total_count: null,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    let results = await callBackEnd(searchTerm);
    setSearchResults({ searchedTerm: searchTerm, data: results.data });
    setSearchTerm("");
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
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" form="searchForm" className="button">
            Search
          </button>
        </form>
      </div>
      {searchResults.data.items.length > 0 ? (
        <SearchResultRenders
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
