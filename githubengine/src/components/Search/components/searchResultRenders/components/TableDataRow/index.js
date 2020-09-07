import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const TableDataRow = ({ items, setSearchedRepos, sort }) => {
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

export default TableDataRow;
