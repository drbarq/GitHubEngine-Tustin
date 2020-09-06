import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Search from "./components/Search";
import Details from "./components/Details";
import Error from "./components/Error";

function App() {
  const [searchedRepos, setSearchedRepos] = useState();

  return (
    <div className="App-root">
      <div className="App-container">
        <div className="title-header">GitHub Engine</div>
        <Switch>
          <Route
            path="/"
            component={() => <Search setSearchedRepos={setSearchedRepos} />}
            exact
          />
          <Route
            path="/details/:repoId"
            component={() => (
              <Details
                searchedRepos={searchedRepos}
                setSearchedRepos={setSearchedRepos}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
