import React, { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchTerm, setSerchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();

    console.log(searchTerm, "searchTerm");
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
