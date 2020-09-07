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

const SearchBar = ({ setSearchedRepos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({
    searchedTerm: "",
    data: {
      items: [],
      incomplete_results: null,
      total_count: null,
    },
  });

  const { searchedTerm, data } = useStoreState((state) => state);
  const { updateSearchedTerm, updateDataObject } = useStoreActions(
    (actions) => actions
  );

  /**
   * handleSubmit function for search button, persist and prevent rerender
   * clear out the local state for incoming data
   * call backend with new search term
   * set state with new search data
   * @param {object} event - event parameters
   */

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    // reset search results
    setSearchResults({
      searchedTerm: "",
      data: {
        items: [],
        incomplete_results: null,
        total_count: null,
      },
    });

    let results = await callBackEnd(searchTerm);
    updateDataObject({ searchedTerm: searchTerm, data: results.data });
    setSearchResults({ searchedTerm: searchTerm, data: results.data });
  };

  /**
   * function which calls express backend to search cache and if needed
   * make hit external github API
   * @param {string} searchTerm - user inputed text for github search
   * @returns - the response from the api call
   */
  const callBackEnd = async (searchTerm) => {
    const response = await fetch(`/searchGitHub/${searchTerm}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    } else {
      return body;
    }
  };
  // const callBackEnd = async (searchTerm) => {
  //   const response = await fetch(`/searchGitHub/${searchTerm}`);
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   } else {
  //     return body;
  //   }
  // };

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
      {searchResults.data.items.length > 0 ? (
        <SearchResultRenders
          searchResults={searchResults}
          setSearchedRepos={setSearchedRepos}
        />
      ) : (
        ""
      )}
      {searchResults.data.total_count === 0 ? (
        <div>You have yourself a good idea, no repos match those terms</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
