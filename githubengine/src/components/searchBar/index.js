import React, { useState } from "react";
import "./styles.scss";

const SearchBar = () => {
  const [searchTerm, setSerchTerm] = useState("");

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search GitHub Engine"
      onChange={(event) => setSerchTerm(event.target.value)}
    />
  );
};

export default SearchBar;
