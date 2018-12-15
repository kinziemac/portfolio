import React, { Component } from "react";
import "./styles/SplashLanding.scss";

export default class SplashLanding extends Component {
  render() {
    return (
      <div className="SplashLanding" id="Home">
        <div id="SplashCenterPiece">
          <div id="CenterPieceBorder">
            <div id="WelcomeText">
              <p>Welcome</p>
              <p>to my</p>
              <p className="portfolioText">Portfolio</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{/* <div className="SplashLanding" id="Home">
<div className="SplashText">
  <span className="NameText">
    <p>Hello, I'm </p>
    <p className="Name">Mackenzie Higa</p>
    <p>.</p>
  </span>
  <p className="SmallerText">
    I'm a software engineer and web developer.
  </p>
</div>
</div> */}
