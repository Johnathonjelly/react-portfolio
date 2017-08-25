import React, { Component } from "react";
import Plus from "react-icons/lib/go/plus";
import Nav from "./Nav";

class Head extends Component {
  render() {
    return (
      <header>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title animated fadeInUp">Johnathon Southworth</h1>
              <h4 className="subtitle animated fadeInDown">
                Front-end <Plus className="animated infinite flip plusSign" />{" "}
                Back-end Developer
              </h4>
            </div>
          </div>
        </section>
        <Nav />
      </header>
    );
  }
}

export default Head;
