import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import TableHeaderLabel from "./components/TableHeaderLabel";

const SearchResultRenders = ({ searchResults, setSearchedRepos }) => {
  let {
    searchedTerm,
    data: { items },
  } = searchResults;

  const [sort, setSort] = useState({
    name: "score",
    accend: null,
    filterLanguage: "all",
    languages: [],
    filteredItems: items,
  });

  useEffect(() => {
    itemLanguages();
  }, []);

  // const sortData = () => {
  //   return sort.filteredItems.sort((a, b) => {
  //     return a[sort.name] < b[sort.name] ? 1 : -1;
  //   });
  // };

  // const updateCurrentSort = (atttributeName = sort.name) => {
  //   sort.accend ? sortData() : sortData().reverse();
  //   setSort({ ...sort, name: atttributeName, accend: !sort.accend });
  // };

  const itemLanguages = () => {
    let languages = [];
    sort.filteredItems.forEach((repo) => {
      return languages.includes(repo.language)
        ? null
        : languages.push(repo.language);
    });

    setSort({ ...sort, languages });
  };

  // const TableHeaderLabel = () => {
  //   const repoAttributes = [
  //     {
  //       label: "Repo Description",
  //       name: "description",
  //     },
  //     {
  //       label: "Relevance",
  //       name: "score",
  //     },
  //     {
  //       label: "Stars",
  //       name: "stargazers_count",
  //     },
  //   ];

  //   return repoAttributes.map((atttribute, index) => {
  //     let arrowDirection;

  //     if (sort.accend && sort.name === atttribute.name) {
  //       arrowDirection = <i className="fas fa-arrow-up"></i>;
  //     } else if (!sort.accend && sort.name === atttribute.name) {
  //       arrowDirection = <i className="fas fa-arrow-down"></i>;
  //     }

  //     return (
  //       <th key={index} onClick={() => updateCurrentSort(atttribute.name)}>
  //         {atttribute.label} {arrowDirection}
  //       </th>
  //     );
  //   });
  // };

  const TableDataRow = (items) => {
    return sort.filteredItems.map((repo, index) => {
      return (
        <tr key={repo.id} className="repoInformation-row">
          <td>
            <Link
              to={`/details/${repo.id}`}
              onClick={() => setSearchedRepos(items)}
            >
              {repo.description}
            </Link>
          </td>
          <td>
            <Link
              to={`/details/${repo.id}`}
              onClick={() => setSearchedRepos(items)}
            >
              {repo.score}
            </Link>
          </td>
          <td>
            <Link
              to={`/details/${repo.id}`}
              onClick={() => setSearchedRepos(items)}
            >
              {repo.stargazers_count}
            </Link>
          </td>
        </tr>
      );
    });
  };

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
    <div className="SearchResultsRender-container">
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
        <tbody>{TableDataRow(items)}</tbody>
      </table>
    </div>
  );
};
export default SearchResultRenders;
