import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="error-container">
      <h3>Shoot! Looks like we hit a snag, lets head back </h3>
      <Link to="/">
        <div className="navContainer">
          <i className="fas fa-home"></i>
          <div className="title">Home</div>
        </div>
      </Link>
      <div className="failImage">
        <img
          className="image"
          alt="Subterranean Homesick Blues, Wish I knew what I was looking for"
          src="https://media.giphy.com/media/li0dswKqIZNpm/giphy.gif"
        />
      </div>
    </div>
  );
};

export default ErrorScreen;
