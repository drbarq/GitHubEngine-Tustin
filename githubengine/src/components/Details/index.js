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
      <div className="headerLink-container">
        <img src={avatar_url} />
        <div className="gihubLink">
          <div className="owner">
            <a href={owner_html_url} target="_blank">
              {login}/
            </a>
          </div>
          <div className="repoName">
            <a href={html_url} target="_blank">
              {name}
            </a>
          </div>
        </div>
        <Link to="/">
          <div className="navContainer">
            <i class="fas fa-home"></i>
            <div className="title">Home</div>
          </div>
        </Link>
      </div>
      <div className="about">
        <p>
          About: <strong>{description}</strong>{" "}
        </p>
      </div>
      <div className="language">
        <p>
          Language: <strong>{language}</strong>
        </p>
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
      <div className="createdStats-container">
        <div className="created">
          Created at: <strong>{created_at}</strong>{" "}
        </div>
        <div className="created">
          Updated at: <strong>{updated_at}</strong>{" "}
        </div>
      </div>
    </div>
  );
};

export default Details;
