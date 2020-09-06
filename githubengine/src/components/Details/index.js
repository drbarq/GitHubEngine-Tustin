import React from "react";
import "./styles.scss";

import { useParams } from "react-router-dom";

const Details = () => {
  const { repoId } = useParams();

  return (
    <div>
      <h1>Details for {repoId}</h1>
    </div>
  );
};

export default Details;
