import React, { Component } from "react";
import "./styles/SplashLanding.scss";

export default class SplashLanding extends Component {
  handleSelectSection = () => {
    this.props.onClick("About");
  };

  render() {
    return (
      <div className="SplashLanding" id="Home">
        <div id="SplashInnerContainer">
          <div id="SplashTextContainer">
            <p className="NameTitleText">Mackenzie Higa</p>
            <p className="SubTitleText">Design, Protype, Engineer</p>
          </div>
        </div>
      </div>
    );
  }
}
