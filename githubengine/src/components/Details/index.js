import React from "react";
import "./styles.scss";

import { useParams, useHistory, Link } from "react-router-dom";
const Details = ({ selectedRepo }) => {
  if (selectedRepo === undefined) {
    return (
      <div className="error-container">
        <h3>Shoot! Looks like we hit a snag, lets head back </h3>
        <Link to="/">Home</Link>
      </div>
    );
  }

  //   const { repoId } = useParams();
  let {
    name,
    html_url,
    description,
    created_at,
    updated_at,
    stargazers_count,
    language,
    forks_count,
    watchers,
    owner: { avatar_url, url, login, html_url: owner_html_url },
  } = selectedRepo;

  return (
    <div className="Details-container">
      <h1>Repo Details</h1>
      <div className="headerLink-container">
        <a href={owner_html_url}>{login}</a>
      </div>
    </div>
  );
};

export default Details;
