import React, { Component } from "react";
import CenterMePic from "../images/centerMePic.jpg";

//images
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
          <div className="tile is-parent">
            <div className="tile is-child box">
              <figure className="has-text-centered animated flipInX">
                <img
                  src={CenterMePic}
                  style={CenterPictureStyle}
                  alt="Picture of Johnathon"
                />
              </figure>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p>
                I'm Johnathon and I currently live in Oregon. My mission is to
                provide great websites for great clients. I develope creative
                solutions for back-end and front-end problems. I enjoy building
                all kinds of websites; Full blown web applications or static
                websites just providing information. I use a range of
                technologies to make your web presence happen. From HTML5/CSS3
                and JavaScript, to PHP and nodejs. I look foward to reading your
                business inquiries at my email{" "}
                <a href="mailto:johnathonsouthworth@gmail.com">
                  Johnathon Southworth
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const CenterPictureStyle = {
  borderRadius: "8px",
  height: "auto",
  MaxWidth: "100%"
};
