import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Search from "./components/Search";
import Details from "./components/Details";
import Error from "./components/Details/components/ErrorScreen";
import { useStoreState, useStoreActions } from "easy-peasy";

/**
 * App functional component which holds the app structure
 * @returns - parent container elements and router logic to display approprate information
 */

function App() {
  const [searchedRepos, setSearchedRepos] = useState();

  const { searchedTerm, data } = useStoreState((state) => state);
  const { updateSearchedTerm } = useStoreActions((actions) => actions);

  // console.log(searchedTerm, "searchedTerm");

  return (
    <div className="App-root" data-test="component-app">
      <div className="App-container">
        <div className="title-header" data-test="component-app-title">
          GitHub Engine
        </div>
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
