import React, { useEffect, useState } from "react";
import "./styles.scss";

const SearchResultRenders = ({ searchResults, setSearchResults }) => {
  let {
    searchedTerm,
    data: { total_count, incomplete_results, items },
  } = searchResults;

  const [sort, setSort] = useState({
    name: "",
    accend: null,
  });

  useEffect(() => {
    updateCurrentSort();
  }, [sort.name]);

  const sortData = () => {
    return items.sort((a, b) => {
      return a[sort.name] < b[sort.name] ? 1 : -1;
    });
  };

  // const sortItemsDirection = () => {
  //   if (sort.accend) {
  //     sortData();
  //   } else {
  //     sortData().reverse();
  //   }
  // };

  const updateCurrentSort = (atttributeName = sort.name) => {
    sort.accend ? sortData() : sortData().reverse();
    setSort({ name: atttributeName, accend: !sort.accend });
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
