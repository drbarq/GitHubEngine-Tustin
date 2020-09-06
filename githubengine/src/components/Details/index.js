import React from "react";
import "./styles.scss";
import Search from "../Search";

import { useParams, useHistory, Link } from "react-router-dom";
const Details = ({ searchedRepos }) => {
  const { repoId } = useParams();

  console.log(searchedRepos);

  if (searchedRepos === undefined) {
    return (
      <div className="error-container">
        <h3>Shoot! Looks like we hit a snag, lets head back </h3>
        <Link to="/">Home</Link>
      </div>
    );
  }

  const repo = searchedRepos.find((repos) => {
    return repos.id === Number(repoId);
  });

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
  } = repo;

  return (
    <div className="Details-container">
      <Link to="/">Home</Link>
      {/* <h1>Repo Details</h1> */}
      <div className="headerLink-container">
        <img src={avatar_url} />
        <div className="owner">
          <a href={html_url} target="_blank">
            {login}/
          </a>
        </div>
        <div className="repoName">
          <a href={html_url} target="_blank">
            /{name}
          </a>
        </div>
        {/* <h3>
          <a href={owner_html_url} target="_blank">
            {login}
          </a>{" "}
          /
        </h3>
        <h3>
          /<a href={html_url}> {name}</a>
        </h3> */}
      </div>
      <div className="about">
        <p>About: {description}</p>
      </div>
      <div className="repoStats-container">
        <div className="stat">
          <i class="fas fa-code-branch"> {forks_count}</i>
        </div>
        <div className="stat">
          <i class="far fa-star"> {stargazers_count}</i>
        </div>
        <div className="stat">
          <i class="far fa-eye"> {watchers}</i>
        </div>
      </div>
    </div>
  );
};

export default Details;
