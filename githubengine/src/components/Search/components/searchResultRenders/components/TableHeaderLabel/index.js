import React from "react";

/**
 * TableHeaderLabel - functional component that generates the table header
 * and functionality to change sort parameter and direction
 * @param {object} sort - Local state passed from searchResultRenders
 * @param {function} setSort -  Setter function for local state searchResultRenders
 * @returns - Table headers for column information with interactive sort elements
 */

const TableHeaderLabel = ({ sort, setSort }) => {
  /**
   * repoAttributes - object for header attributes
   * @returns {object} - contains the UI display label and data structure name
   */
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

  /**
   * function which sorts the results by selected filtering attributes
   * @returns - array of repo objects in new filtered order by repo.name
   */
  const sortData = () => {
    return sort.filteredItems.sort((a, b) => {
      return a[sort.name] < b[sort.name] ? 1 : -1;
    });
  };

  /**
   * updateCurrentSort - onClick of header element update the sort direction and sort attribute
   * @param {string} atttributeName
   */
  const updateCurrentSort = (atttributeName = sort.name) => {
    sort.accend ? sortData() : sortData().reverse();
    setSort({ ...sort, name: atttributeName, accend: !sort.accend });
  };

  /**
   * generateHeaderLabels - functional component which dynamically generates and updates
   * the active header labels and corresponding arrow direction
   * @param {object} repoAttributes -object for header attribute label/name
   */
  const generateHeaderLabels = (repoAttributes) => {
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

  return generateHeaderLabels(repoAttributes);
};

export default TableHeaderLabel;
