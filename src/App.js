import React, { Component } from "react";
import Campuses from "./components/Campuses";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              CRUD App
            </a>
          </nav>

          <Campuses />
        </div>
      </div>
    );
  }
}

export default App;
