import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useStoreState } from "easy-peasy";
import TableHeaderLabel from "./components/TableHeaderLabel";
import TableDataRow from "./components/TableDataRow";

/**
 * Functional component which renders the results from the search
 * uses global state for searched term and result information from api call
 * @returns - Data table with corresponding repo information
 */
const SearchResultRenders = () => {
  const {
    searchedTerm,
    data: { items },
  } = useStoreState((state) => state);

  const [sort, setSort] = useState({
    name: "",
    accend: null,
    filterLanguage: "all",
    languages: [],
    filteredItems: items,
  });

  /**
   * useEffect call to compile list of unique languages on render
   * resets the local state and updates when items changes
   */
  useEffect(() => {
    let languages = [];
    items.forEach((repo) => {
      return languages.includes(repo.language)
        ? null
        : languages.push(repo.language);
    });
    setSort({
      name: "score",
      accend: null,
      filterLanguage: "all",
      languages,
      filteredItems: items,
    });
  }, [items]);

  /**
   * component which dynamically renders the drop down selection element
   * Allows user to filter repo results by available languages
   * Sets local state values for selected language and filtered repos by language
   * @returns - select element to enable lanaguage filter selection
   */
  const generateLanguageSelections = () => {
    /**
     * handleSelection
     * @param {object} e - event properties of drop down selection
     * Creates languageFiltered array of repos which match the language selected
     */
    const handleSelection = (e) => {
      let languageSelected = e.target.value;

      let languageFiltered = items.filter((repo) => {
        if (languageSelected === "all") {
          return items;
        }
        return repo.language === languageSelected;
      });

      setSort({
        ...sort,
        filterLanguage: e.target.value,
        filteredItems: languageFiltered,
      });
    };

    /**
     * Starting array for languageSelections with 'all' loaded
     */
    let languageSelections = [
      <option key="all" value="all">
        All
      </option>,
    ];

    /**
     * function to generate available language selections based on current repo results
     */
    sort.languages.forEach((language, index) => {
      languageSelections.push(
        <option key={index} value={language}>
          {language}
        </option>
      );
    });

    return (
      <select onChange={handleSelection} value={sort.filterLanguage}>
        {languageSelections}
      </select>
    );
  };

  return (
    <div
      className="SearchResultsRender-container"
      data-test="component-search-results"
    >
      <div className="header-container">
        <h1>Searched Term: {searchedTerm}</h1>
        <div className="filter-container">
          <h4>Filter By:</h4>
          {generateLanguageSelections()}
        </div>
      </div>
      <table className="results-table">
        <thead>
          <tr>
            <TableHeaderLabel sort={sort} setSort={setSort} />
          </tr>
        </thead>
        <tbody>
          <TableDataRow sort={sort} />
        </tbody>
      </table>
    </div>
  );
};
export default SearchResultRenders;
