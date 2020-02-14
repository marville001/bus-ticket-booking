import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Login from "./Login";
//

class App extends Component {
  render() {
    return (
      <Switch>
        <Navbar />
        {/* <Route path="/home/:name" component={Nav} /> */}
      </Switch>
    );
  }
}

export default App;
