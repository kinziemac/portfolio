import React, { Component } from "react";
import "./styles/SplashLanding.scss";

export default class SplashLanding extends Component {
  handleSelectSection = () => {
      this.props.onClick("About");
  }

  render() {
    return (
      <div className="SplashLanding" id="Home">
        <div id="CenterPieceBorder">
          <div id="WelcomeText">
            <p>Welcome</p>
            <p>to my</p>
            <p className="portfolioText">Portfolio</p>
          </div>
          <div id="ScrollDown" onClick={this.handleSelectSection}>
            <p>V</p>
          </div>
        </div>
      </div>
    );
  }
}
