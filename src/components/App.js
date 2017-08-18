import React, { Component } from "react";
// import logo from "../logo.svg";
import "../style/App.css";
import Head from "./layout/Head";
import Body from "./layout/Body";
import Foot from "./layout/Foot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default App;
