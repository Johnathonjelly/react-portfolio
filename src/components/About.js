import React, { Component } from "react";
import Head from "./layout/Head";
import Foot from "./layout/Foot";

class About extends Component {
  render() {
    return (
      <div>
        <Head />
        <div>
          <h3>About</h3>
        </div>
        <Foot />
      </div>
    );
  }
}

export default About;
