import React, { Component } from "react";
import CenterMePic from "./images/centerMePic.jpg";

export default class Body extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box animated fadeInLeft">
              <figure className="has-text-centered">
                <img
                  src={CenterMePic}
                  style={CenterPictureStyle}
                  alt="Picture of Johnathon"
                />
              </figure>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent animated fadeInRight">
            <div className="tile is-child box">
              <p>
                I'm Johnathon and I currently live in Oregon. My mission is to
                provide great websites for awesome clients. I develop creative
                solutions for back-end and front-end problems. I enjoy building
                all kinds of websites; Full blown web applications or static
                websites just providing information. I use a range of
                technologies to make your web presence happen. From HTML5/CSS3
                and JavaScript, to PHP and nodejs. I look forward to reading
                your business inquiries at my email{" "}
                <a href="mailto:johnathonsouthworth@gmail.com">
                  southworthjohnathon@gmail.com
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
