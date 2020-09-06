import React from "react";
import "./styles.scss";

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
    return <th key={index}>{atttributes.label}</th>;
  });
};
