import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bulma/css/bulma.css";
import "animate.css/animate.min.css";

import Head from "./components/layout/Head";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Foot from "./components/layout/Foot";

ReactDOM.render(
  <Router>
    <div className="containter">
      <Head />
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Foot />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
