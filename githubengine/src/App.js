import React, { useState, useEffect } from "react";
import "./App.scss";

import SearchBar from "./components/searchBar";

function App() {
  const [state, setState] = useState({ data: null });

  useEffect(() => {
    callBackEnd("tetris react")
      .then((res) => setState({ data: res.data.total_count }))
      .catch((err) => console.log(err));
  }, []);

  const callBackEnd = async (searchTerm) => {
    const response = await fetch(`/searchGitHub/${searchTerm}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    } else {
      return body;
    }
  };

  return (
    <div className="App-root">
      <div className="App-container">
        <h4>GitHub Engine</h4>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
