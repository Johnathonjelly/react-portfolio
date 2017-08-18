import React, { Component } from "react";
import Plus from "react-icons/lib/go/plus";
import Nav from "./Nav";

class Head extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Johnathon Southworth</h1>
              <h4 className="subtitle">
                Front-end <Plus /> Back-end Developer
              </h4>
            </div>
          </div>
        </section>
        <Nav />
      </div>
    );
  }
}

export default Head;
