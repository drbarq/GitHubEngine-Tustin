import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import SearchBar from "./components/Search/components/searchBar";
import Search from "./components/Search";
import Details from "./components/Details";
import Error from "./components/Error";

function App() {
  return (
    <div className="App-root">
      <div className="App-container">
        <h4>GitHub Engine</h4>
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/details/:repoId" component={Details} />
          <Route component={Error} />
        </Switch>

        {/* <Search /> */}
      </div>
    </div>
  );
}

export default App;
