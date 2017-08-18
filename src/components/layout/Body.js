import React, { Component } from "react";

//images
import BigMe from "../images/bigMePic.jpg";
import Css3Icon from "../images/css3.png";
import GraphQLIcon from "../images/GraphQL_Logo.svg.png";
import Html5Icon from "../images/HTML5_Logo_512.png";
import JavaScriptLogo from "../images/javascript_logo.png";
import SQLIcon from "../images/mysql.svg";
import MongoDBIcon from "../images/mongodb.png";
import PhpIcon from "../images/php.svg";
import ReactIcon from "../images/reactIcon.png";
import SassIcon from "../images/sass.svg";
import VueIcon from "../images/vuejs.png";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi expedita, esse velit tenetur eius doloremque at
                    delectus voluptatibus, fuga facere illo vitae doloribus, in
                    repellat voluptates exercitationem hic officia fugiat.
                  </p>
                </article>
                <article className="tile is-child box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, libero iure. Debitis repudiandae porro
                    inventore, quas est quidem. Fuga expedita architecto,
                    tempore aspernatur, nihil numquam necessitatibus beatae
                    labore eius natus!
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quae officia nam pariatur blanditiis libero, doloremque,
                    quia optio dicta doloribus quibusdam dolorem perferendis
                    maxime modi sed velit recusandae suscipit, mollitia
                    laboriosam.
                  </p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam adipisci culpa vitae explicabo id reprehenderit
                  placeat molestiae amet quae facilis nihil perspiciatis
                  mollitia, non enim harum, error debitis ipsa accusantium.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
