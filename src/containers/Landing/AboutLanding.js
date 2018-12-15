import React, { Component } from "react";
import "./styles/AboutLanding.scss";

export default class AboutLanding extends Component {
  render() {
    return (
      <div className="AboutLanding" id="About">
        <div id="AboutInner">
          <p id="AboutTitle">About Me</p>

          <div id="AboutContent">
            <div id="PersonalImageContainer">
              <img id="PersonalImage" src="images/mackenzie.png" />
            </div>
            <div id="PersonalDescription">
              <blockquote className="personalQuote">
                You Miss 100% of the Shots you Never Take
              </blockquote>
              <p>Lets just try to ge the to work</p>
              <p>Not sure whyit won't</p>
              <p>great</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
