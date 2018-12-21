import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import SplashLanding from "./SplashLanding";
import AboutLanding from "./About/AboutLanding";
import ExperienceContainer from "./Experience/ExperienceContainer";
import ProjectLanding from "./Projects/ProjectLanding";
import Canvas from "../Canvas/Canvas";
import TransitionBackground from "../Canvas/TransitionBackground";
import "./styles/LandingContainer.scss";

export default class LandingContainer extends Component {
  handleScroll(section) {

    const body = document.getElementById(section);
    if (body) {
      window.scrollTo({
        'behavior': 'smooth',
        'top': body.offsetTop
      });
    }
  }

  render() {
    return (
      <div id="LandingContainer">
        <LandingHeader onScroll={this.handleScroll.bind(this)} />
        <TransitionBackground />
        <Canvas />
        <SplashLanding onClick={this.handleScroll} />
        <AboutLanding />
        <div className="LandingSeperation"/>
        <ExperienceContainer />
        <ProjectLanding />
      </div>
    );
  }
}
