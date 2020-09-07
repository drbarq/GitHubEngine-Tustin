import React from "react";
import "./styles.scss";
import ErrorScreen from "./components/ErrorScreen";
import { useStoreState } from "easy-peasy";

import { useParams, Link } from "react-router-dom";
const Details = () => {
  const { repoId } = useParams();
  const {
    searchedTerm,
    data: { items },
  } = useStoreState((state) => state);

  if (items === undefined) {
    return <ErrorScreen />;
  }

  const repo = items.find((repos) => {
    return repos.id === Number(repoId);
  });

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
    owner: { avatar_url, login, html_url: owner_html_url },
  } = repo;

  return (
    <div className="Details-container">
      <div className="headerLink-container">
        <Link to="/">
          <div className="navContainer">
            <i className="fas fa-home"></i>
            <div className="title">Home</div>
          </div>
        </Link>
        <div className="gihubLink">
          <div className="owner">
            <a href={owner_html_url} target="_blank" rel="noopener noreferrer">
              {login}/
            </a>
          </div>
          <div className="repoName">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        </div>
        <img src={avatar_url} alt={`${name} avatar`} />
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
          <i className="fas fa-code-branch"> {forks_count}</i>
        </div>
        <div className="stat">
          <i className="far fa-star"> {stargazers_count}</i>
        </div>
        <div className="stat">
          <i className="far fa-eye"> {watchers}</i>
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
