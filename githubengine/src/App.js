import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import SearchBar from "./components/Search/components/searchBar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App-root">
      <div className="App-container">
        <h4>GitHub Engine</h4>
        <Search />
      </div>
    </div>
  );
}

export default App;
