import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Search from "./components/Search";
import Details from "./components/Details";
import Error from "./components/Details/components/ErrorScreen";

/**
 * App functional component which holds the app structure
 * @returns - parent container elements and router logic to display approprate components
 */
function App() {
  return (
    <div className="App-root" data-test="component-app">
      <div className="App-container">
        <div className="title-header" data-test="component-app-title">
          <div className="bold">GitHub</div>
          <div className="light">Engine</div>
        </div>
        <Switch>
          <Route path="/" component={() => <Search />} exact />
          <Route path="/details/:repoId" component={() => <Details />} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
