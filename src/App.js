import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/Account";
import HeaderNav from "./components/HeaderNav";
import LandingPage from "./components/LandingPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <Route exact path="/account" component={Account} />
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
