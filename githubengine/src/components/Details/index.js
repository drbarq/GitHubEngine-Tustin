import React from "react";
import "./styles.scss";

import { useParams, useHistory, Link } from "react-router-dom";
const Details = ({ selectedRepo }) => {
  const { repoId } = useParams();

  console.log(selectedRepo);

  const repo = selectedRepo.find((repos) => {
    return repos.id === Number(repoId);
    // console.log(repos, "repos");
  });

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
  } = repo;

  //   let {
  //     name,
  //     html_url,
  //     description,
  //     created_at,
  //     updated_at,
  //     stargazers_count,
  //     language,
  //     forks_count,
  //     watchers,
  //     owner: { avatar_url, url, login, html_url: owner_html_url },
  //   } = selectedRepo;

  return (
    <div className="Details-container">
      {/* <h1>Repo Details</h1> */}
      <div className="headerLink-container">
        <img src={avatar_url} />
        <h3>
          <a href={owner_html_url} target="_blank">
            {login}
          </a>{" "}
          /
        </h3>
        <h3>
          /<a href={html_url}> {name}</a>
        </h3>
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
