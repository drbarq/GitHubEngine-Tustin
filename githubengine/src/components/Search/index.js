import React, { useState } from "react";
import "./styles.scss";
import { useStoreState, useStoreActions } from "easy-peasy";
import SearchResultRenders from "./components/searchResultRenders";

/**
 * Functional component which renders the Search bar and app functionality
 * @param {function} setSearchedRepos - setter function to update parent state with
 * repo information
 * @returns -  Search component which controls search results after response has been answered
 */
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useStoreState((state) => state);
  const { callBackEnd } = useStoreActions((actions) => actions);

  /**
   * handleSubmit function for search button, persist and prevent rerender
   * call backend with new search term
   * set state with new search data using dispatched action within callBackend
   * @param {object} event - event parameters
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    await callBackEnd(searchTerm);
  };

  return (
    <div className="searchBar-container" data-test="component-searchBar">
      <div className="form-container">
        <form id="searchForm" onSubmit={handleSubmit} className="form">
          <input
            data-test="component-searchInput"
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
          <button
            type="submit"
            form="searchForm"
            className="button"
            data-test="search-button"
          >
            Search
          </button>
        </form>
      </div>
      {/* {searchResults.data.items.length > 0 ? ( */}
      {data.items.length > 0 ? <SearchResultRenders /> : ""}
      {data.total_count === 0 ? (
        <div>You have yourself a good idea, no repos match those terms</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
