import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Search from "./components/Search";
import Details from "./components/Details";
import Error from "./components/Error";

function App() {
  const [selectedRepo, setSelectedRepo] = useState();

  return (
    <div className="App-root">
      <div className="App-container">
        <h4>GitHub Engine</h4>
        <Switch>
          <Route
            path="/"
            component={() => <Search setSelectedRepo={setSelectedRepo} />}
            exact
          />
          <Route
            path="/details/:repoId"
            component={() => <Details selectedRepo={selectedRepo} />}
          />
          <Route component={Error} />
        </Switch>

        {/* <Search /> */}
      </div>
    </div>
  );
}

export default App;
