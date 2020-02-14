import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//
import "./App.css";

import Admin from "./components/Admin/Admin";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
