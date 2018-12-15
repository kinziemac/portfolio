import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import SplashLanding from "./SplashLanding";
import AboutLanding from "./AboutLanding";
import ProjectLanding from "./ProjectLanding";
import Canvas from "../Canvas/Canvas";
import TransitionBackground from "../Canvas/TransitionBackground";
import "./styles/LandingContainer.scss";

export default class LandingContainer extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleColorChange.bind(this));
  // }

  // handleColorChange() {
  //   const elem = document.getElementById("Canvas");
  //   const splash = document.getElementById("Home");
  //   const about = document.getElementById("About");
  //   const totalSplash = (splash.offsetHeight + splash.offsetTop) / 1.3;
  //   if (window.pageYOffset >= 1000) {
  //     // elem.style.background = "#870433";
  //     // elem.style.background = "#42c793";
  //     elem.style.background = "#3C1CFE";
  //   } else if (
  //     window.pageYOffset >= totalSplash - 100 &&
  //     window.pageYOffset < 1000
  //   ) {
  //     elem.style.background = "#377EFF";
  //   } else if (window.pageYOffset < totalSplash) {
  //     // elem.style.background = "#041534";
  //     elem.style.background = "radial-gradient(ellipse at center,#cb8b5a 0,#1d1d1b 82%)";
  //     // elem.style.background = "#3C1CFE";
  //   }
  // }

  handleScroll(section) {
    const body = document.getElementById(section); //.getBoundingClientRect();
    if (body) {
      body.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }

  render() {
    return (
      <div id="LandingContainer">
        {/* <LandingHeader onScroll={this.handleScroll.bind(this)} /> */}
        <TransitionBackground />
        <Canvas />
        <SplashLanding />
        <div className="LandingSeperation" />
        <AboutLanding />
        <div className="LandingSeperation" />
        <ProjectLanding />
        <div className="LandingSeperation" />
      </div>
    );
  }
}
