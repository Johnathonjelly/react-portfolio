import React, { Component } from "react";
import Head from "./layout/Head";
import Foot from "./layout/Foot";

//images
import Css3Icon from "./images/css3.png";
import GraphQLIcon from "./images/GraphQL_Logo.svg.png";
import Html5Icon from "./images/HTML5_Logo_512.png";
import JavaScriptIcon from "./images/javascript_logo.png";
import SQLIcon from "./images/mysql.png";
import MongoDBIcon from "./images/mongodb.png";
import PhpIcon from "./images/php.svg";
import ReactIcon from "./images/reactIcon.png";
import SassIcon from "./images/sass.svg";
import VueIcon from "./images/vuejs.png";
import NoteApp from "./images/noteApp.png";
import VueImg from "./images/vueThumb.png";
import MouseThumb from "./images/mouseThumb.png";

class About extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box">
              <section>
                <h1 className="is-size-4 has-text-grey-darker">
                  Here are a few projects of mine
                </h1>
                <dl>
                  <dt />
                  <dd>
                    <p className="is-size-7">
                      I will also invite you to my{" "}
                      <a
                        href="http://codepen.io/Johnathon_Southworth/#"
                        target="_blank"
                      >
                        codepen
                      </a>{" "}
                      where I sometimes write projects at.
                    </p>
                  </dd>
                </dl>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-300x86">
                      <img src={NoteApp} alt="PHP Note Taking Application" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            src={NoteApp}
                            alt="PHP Note Taking Application"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">
                          <a
                            href="http://stoic-cookbook.com/register.php"
                            target="_blank"
                          >
                            Note Taking Application
                          </a>
                        </p>
                        <p className="subtitle is-6">
                          Save Your Notes In The Cloud
                        </p>
                      </div>
                    </div>

                    <div className="content">
                      A straightforward application. Unfortunately this current
                      domain only hosts static websites, so the note application
                      needed to be hosted with someone else. The website doesn't
                      make sense to have this sort of application on it, but I
                      have to make do with what I have for now.
                      <br />
                      <span className="small">Last updated: May 01 2017</span>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-300x86">
                      <img src={VueImg} alt="vuejs project" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={VueImg} alt="vuejs thumbnail" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">
                          <a
                            href="https://codepen.io/Johnathon_Southworth/full/aJGWKm/"
                            target="_blank"
                          >
                            Project in vuejs
                          </a>
                        </p>
                        <p className="subtitle is-6">Classic Old School Game</p>
                      </div>
                    </div>

                    <div className="content">
                      I am interested in vuejs so I wanted to build a quick
                      application to get my feet wet.
                      <br />
                      <span className="small">Last updated: March 01 2017</span>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="card">
                  <div className="card-image">
                    <figure className="image is-300x86">
                      <img src={MouseThumb} alt="cat/mouse project" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={MouseThumb} alt="cat/mouse thumbnail" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">
                          <a
                            href="https://codepen.io/Johnathon_Southworth/project/full/AOPzBp/"
                            target="_blank"
                          >
                            Cat and Mouse Project
                          </a>
                        </p>
                        <p className="subtitle is-6">
                          Try and catch the mouse!
                        </p>
                      </div>
                    </div>

                    <div className="content">
                      In my attempts to learn something about canvas I wrote a
                      cat and mouse type game.
                      <br />
                      <span className="small">Last updated: April 28 2017</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="tile is-child box">
              <h2 className="has-text-centered has-text-grey-darker is-size-5">
                Here are the technologies I am comfortable with
              </h2>
              <br />
              <div style={techIconDivStyle}>
                <img
                  className="techIcons animated infinite pulse"
                  src={Html5Icon}
                  alt="HTML5 Icon"
                />
                <img
                  className="techIcons animated infinite pulse"
                  src={Css3Icon}
                  alt="CSS3 Icon"
                />
                <img
                  src={SassIcon}
                  alt="SASS Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={JavaScriptIcon}
                  alt="JavaScript Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={VueIcon}
                  alt="Vuejs Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={ReactIcon}
                  alt="Reactjs Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={GraphQLIcon}
                  alt="GraphQL Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={MongoDBIcon}
                  alt="MongoDB Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={SQLIcon}
                  alt="mySQL Icon"
                  className="techIcons animated infinite pulse"
                />
                <img
                  src={PhpIcon}
                  alt="PHP Icon"
                  className="techIcons animated infinite pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const techIconDivStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around"
};

export default About;
