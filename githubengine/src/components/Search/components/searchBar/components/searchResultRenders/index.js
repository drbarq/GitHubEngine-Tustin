import React, { useEffect, useState } from "react";
import "./styles.scss";

const SearchResultRenders = ({ searchResults, setSearchResults }) => {
  let {
    searchedTerm,
    data: { total_count, incomplete_results, items },
  } = searchResults;

  // console.log(items);

  const [sort, setSort] = useState({
    name: "",
    accend: null,
    filterLanguage: "all",
    items: [],
  });

  useEffect(() => {
    updateCurrentSort();
  }, [sort.name]);

  useEffect(() => {
    filterRepoByLanguage();
  }, [sort.filterLanguage]);

  const sortData = () => {
    return items.sort((a, b) => {
      return a[sort.name] < b[sort.name] ? 1 : -1;
    });
  };

  const updateCurrentSort = (atttributeName = sort.name) => {
    sort.accend ? sortData() : sortData().reverse();
    setSort({ ...sort, name: atttributeName, accend: !sort.accend });
  };

  const TableHeaderLabel = () => {
    const repoAttributes = [
      {
        label: "Repo Description",
        name: "description",
      },
      {
        label: "Relevance",
        name: "score",
      },
      {
        label: "Stars",
        name: "stargazers_count",
      },
    ];

    return repoAttributes.map((atttribute, index) => {
      return (
        <th key={index}>
          <buton onClick={(event) => updateCurrentSort(atttribute.name)}>
            {atttribute.label}
          </buton>
        </th>
      );
    });
  };

  const TableDataRow = (items) => {
    return items.map((repo, index) => {
      return (
        <tr key={repo.id} className="repoInformation-row">
          <td>{repo.description}</td>
          <td>{repo.score}</td>
          <td>{repo.stargazers_count}</td>
        </tr>
      );
    });
  };

  const itemLanguages = () => {
    let languages = [];
    items.forEach((repo) => {
      return languages.includes(repo.language)
        ? null
        : languages.push(repo.language);
    });
    return languages;
  };

  const filterRepoByLanguage = () => {
    let filtered = items.filter((repo) => {
      return repo.language === sort.filterLanguage;
    });

    setSort({ ...sort, items: filtered });
  };

  const generateLanguageSelections = () => {
    const handleSelection = (e) => {
      setSort({ ...sort, filterLanguage: e.target.value });
      // filterRepoByLanguage();
    };

    let languageSelections = [<option value="all">--</option>];

    itemLanguages().forEach((language, index) => {
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
      <h1>Searched Term: {searchedTerm}</h1>
      <h4>Filter By:</h4>
      {generateLanguageSelections()}
      <table className="results-table">
        <thead>
          <tr>{TableHeaderLabel()}</tr>
        </thead>
        <tbody>{TableDataRow(items)}</tbody>
      </table>
    </div>
  );
};
export default SearchResultRenders;
