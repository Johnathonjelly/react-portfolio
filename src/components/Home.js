import React, { Component } from "react";
// import logo from "../logo.svg";
import "../style/App.css";
import Head from "./layout/Head";
import InitialPage from "./InitialPage";
import Foot from "./layout/Foot";

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
