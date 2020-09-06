import React from "react";
import "./styles.scss";

import SearchBar from "./components/searchBar";
import SearchResultRenders from "./components/searchBar/components/searchResultRenders";

const Search = () => {
  return (
    <div className="Search-container">
      <SearchBar />
    </div>
  );
};

export default Search;
