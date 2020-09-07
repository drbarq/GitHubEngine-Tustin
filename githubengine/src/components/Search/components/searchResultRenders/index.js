import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useStoreState } from "easy-peasy";
import TableHeaderLabel from "./components/TableHeaderLabel";
import TableDataRow from "./components/TableDataRow";

const SearchResultRenders = () => {
  const {
    searchedTerm,
    data: { items },
  } = useStoreState((state) => state);

  const [sort, setSort] = useState({
    name: "score",
    accend: null,
    filterLanguage: "all",
    languages: [],
    filteredItems: items,
  });

  /**
   * useEffect call to compile list of unique languages on render
   * reset the local state and update the items to render
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

  const generateLanguageSelections = () => {
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

    let languageSelections = [
      <option key="all" value="all">
        All
      </option>,
    ];

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
