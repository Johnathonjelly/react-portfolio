import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  getUrl() {
    return window.location.pathname;
  }

  render() {
    return (
      <div className="nav">
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul onClick={console.log(this.getUrl())}>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
