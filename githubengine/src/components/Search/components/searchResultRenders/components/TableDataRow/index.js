import React from "react";
import { Link } from "react-router-dom";

/**
 * TableDataRow- functional component that generates each data row for the table
 * @param {object} sort - Local state passed from searchResultRenders
 * @returns - data rows for repos containing repo information and forwarding router links
 */

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
