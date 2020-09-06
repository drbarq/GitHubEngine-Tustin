import React, { useEffect, useState } from "react";
import "./styles.scss";

const SearchResultRenders = ({ searchResults, setSearchResults }) => {
  let {
    searchedTerm,
    data: { total_count, incomplete_results, items },
  } = searchResults;

  const [sort, setSort] = useState({
    name: "",
    accend: true,
  });

  /**
   * accend = true
   * decend = false
   */

  useEffect(() => {
    // sortData();
    updateCurrentSort();
    // }, [sort]);
  }, []);
  // useEffect(() => {
  //   generateRepoResults(items);
  // }, [searchResults]);

  console.log(searchResults, "searchResults");

  const generateRepoResults = (items) => {
    items.forEach((item) => {
      console.log(item, "item");
    });
  };

  const sortData = () => {
    return items.sort((a, b) => {
      if (!sort.accend) {
        return 0;
      } else {
        return a[sort.name] > b[sort.name] ? 1 : -1;
      }
    });
  };

  const sortItemsDirection = () => {
    if (sort.accend) {
      sortData();
    } else {
      sortData().reverse();
    }
  };

  const updateCurrentSort = (atttributeName = sort.name) => {
    console.log(atttributeName);
    console.log(sort, "sort1");

    setSort({ name: atttributeName, accend: !sort.accend });

    sortItemsDirection();

    console.log(sort, "sort2");

    // updateSortDirection();
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

  return (
    <div className="SearchResultsRender-container">
      <h1>Searched Term: {searchedTerm}</h1>
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
