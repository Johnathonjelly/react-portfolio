import React, { Component } from "react";
import "../style/App.css";
import InitialPage from "./InitialPage";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <InitialPage />
      </div>
    );
  }
}

export default Home;
