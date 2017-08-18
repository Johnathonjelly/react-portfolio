import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul>
            <li className="is-active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
