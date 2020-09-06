import React, { useEffect } from "react";
import "./styles.scss";

const SearchResultRenders = ({ searchResults }) => {
  let {
    searchedTerm,
    data: { total_count, incomplete_results, items },
  } = searchResults;

  useEffect(() => {
    generateRepoResults(items);
  }, [searchResults]);

  console.log(searchResults, "searchResults");

  const generateRepoResults = (items) => {
    items.forEach((item) => {
      console.log(item, "item");
    });
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

    return repoAttributes.map((atttributes, index) => {
      return (
        <th key={index}>
          {atttributes.label}
          <buton>^^^</buton>
        </th>
      );
    });
  };

  const TableDataRow = (items) => {
    return items.map((repo, index) => {
      return (
        <tr key={repo.id}>
          <td>{repo.description}</td>
          <td>{repo.score}</td>
          <td>{repo.stargazers_count}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Searched Term: {searchedTerm}</h1>
      <table>
        <thead>
          <tr>{TableHeaderLabel()}</tr>
        </thead>
        <tbody>{TableDataRow(items)}</tbody>
      </table>
    </div>
  );
};
export default SearchResultRenders;
