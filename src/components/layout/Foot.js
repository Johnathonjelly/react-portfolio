import React, { Component } from "react";
import Rodal from "rodal";
//rodal styles
import "rodal/lib/rodal.css";
import MyPic from "../images/me.jpg";
import Copyright from "react-icons/lib/fa/copyright";
import Github from "react-icons/lib/fa/github";
import Linkedin from "react-icons/lib/fa/linkedin";

export default class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  rodalShowHandler() {
    this.setState({ visible: true });
  }

  rodalHideHandler() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="social-icons">
            <button
              onClick={this.rodalShowHandler.bind(this)}
              className="whoami animated infinite pulse button is-primary is-small"
            >
              Who Am I?
            </button>
            <Rodal
              animation="rotate"
              visible={this.state.visible}
              onClose={this.rodalHideHandler.bind(this)}
              className="rodal"
              customStyles={rodalStyle}
            >
              <div className="aboutMeModal" style={aboutMeModalStyle}>
                <figure className="image is-96x96">
                  <img src={MyPic} alt="A picture of me" />
                </figure>
                <p className="subtitle">Johnathon Southworth</p>
                <br />
                <article className="message is-dark" style={modalArticleStyle}>
                  <div className="message-body">
                    <p>
                      I believe in a craftsmanship model approach to life. It
                      isn't what life can offer me, but what I can offer others.
                    </p>
                    <span>
                      Contact me at{" "}
                      <a href="mailto:southworthjohnathon@gmail.com">
                        SouthworthJohnathon@gmail.com
                      </a>
                    </span>
                  </div>
                </article>
              </div>
            </Rodal>
            <span className="links">
              <a href="https://github.com/Johnathonjelly" target="_blank">
                <Github />
              </a>
            </span>
            <span className="links">
              <a href="#" target="_blank">
                <Linkedin />
              </a>
            </span>
          </div>
          <div className="line" />
          <div className="copyright">
            <span className="uppercase">
              <Copyright />
              {new Date().getFullYear()} Johnathon Southworth | all rights
              reserved
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

const rodalStyle = {
  width: "75vw",
  height: "62vh"
};

const aboutMeModalStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

const modalArticleStyle = {
  fontSize: ".7rem"
};
