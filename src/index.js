import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bulma/css/bulma.css";
import "animate.css/animate.min.css";

import Head from "./components/layout/Head";
import App from "./components/App";
import About from "./components/About";

ReactDOM.render(
  <Router>
    <div className="containter">
      <Route exact path="/" component={App} />
      <Route path="/About" component={About} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
