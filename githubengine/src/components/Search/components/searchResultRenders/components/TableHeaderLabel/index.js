import React from "react";
import "./styles.scss";

const TableHeaderLabel = ({ sort, setSort }) => {
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

  const sortData = () => {
    return sort.filteredItems.sort((a, b) => {
      return a[sort.name] < b[sort.name] ? 1 : -1;
    });
  };

  const updateCurrentSort = (atttributeName = sort.name) => {
    sort.accend ? sortData() : sortData().reverse();
    setSort({ ...sort, name: atttributeName, accend: !sort.accend });
  };

  return repoAttributes.map((atttribute, index) => {
    let arrowDirection;

    if (sort.accend && sort.name === atttribute.name) {
      arrowDirection = <i className="fas fa-arrow-up"></i>;
    } else if (!sort.accend && sort.name === atttribute.name) {
      arrowDirection = <i className="fas fa-arrow-down"></i>;
    }

    return (
      <th key={index} onClick={() => updateCurrentSort(atttribute.name)}>
        {atttribute.label} {arrowDirection}
      </th>
    );
  });
};

export default TableHeaderLabel;
