import React from "react";
import { Link } from "react-router-dom";

const TableDataRow = ({ sort }) => {
  return sort.filteredItems.map((repo, index) => {
    return (
      <tr key={repo.id} className="repoInformation-row">
        <td>
          <Link to={`/details/${repo.id}`}>{repo.description}</Link>
        </td>
        <td>
          <Link to={`/details/${repo.id}`}>{repo.score}</Link>
        </td>
        <td>
          <Link to={`/details/${repo.id}`}>{repo.stargazers_count}</Link>
        </td>
      </tr>
    );
  });
};

export default TableDataRow;
