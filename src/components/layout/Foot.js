import React, { Component } from "react";
import Rodal from "rodal";
//rodal styles
import "rodal/lib/rodal.css";
import BigMe from "../images/bigMePic.jpg";
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
              height="514"
              onClose={this.rodalHideHandler.bind(this)}
              visible={this.state.visible}
              width="310"
            >
              <div className="rodalContainer" style={rodalContainerStyle}>
                <div className="imageContainer" style={imageContainerStyle}>
                  <img src={BigMe} alt="A picture of Johnathon" />
                </div>
                <br />
                <div>
                  <p>
                    Everyone who practices web development is always learning
                    and that is no different for me. There is always some up and
                    coming hot library. There will always be that new comer
                    language that promises to solve all your problems. I am
                    someone who enjoys learning. Whether it be a new library, a
                    new language, philosophy, or animal behavior. I then take
                    that knowledge and share it with others. It isn't what the
                    world can offer me, but what I can offer back to the world.
                  </p>
                </div>
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

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center"
};

const rodalContainerStyle = {
  backgroundColor: "#f0fff0",
  borderRadius: "12px",
  fontSize: ".8rem",
  padding: "5px"
};

const aboutMeModalStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

const modalArticleStyle = {
  fontSize: ".7rem"
};
