import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import ProjectWidget from "./ProjectWidget";
import SplashLanding from "./SplashLanding";
import AboutLanding from "./AboutLanding";
import Canvas from "../Canvas/Canvas";
import "./styles/LandingContainer.scss";

export default class LandingContainer extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleColorChange.bind(this));
  }

  handleColorChange() {
    const elem = document.getElementById("Canvas");
    const splash = document.getElementById("Home");
    const about = document.getElementById("About");
    const totalSplash = (splash.offsetHeight + splash.offsetTop) / 1.3;
    if (window.pageYOffset >= 1000) {
      // elem.style.background = "#870433";
      // elem.style.background = "#42c793";
      elem.style.background = "#3C1CFE";
    } else if (window.pageYOffset >= totalSplash && window.pageYOffset < 1000) {
      elem.style.background = "#377EFF";
    } else if (window.pageYOffset < totalSplash) {
      elem.style.background = "#041534";
      // elem.style.background = "#3C1CFE";
    }
  }

  handleScroll(section) {
    const body = document.getElementById(section); //.getBoundingClientRect();
    if (body) {
      body.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }

  render() {
    const projects = [
      { id: 1, name: "FlixFinder", platform: "Chrome Extension" },
      { id: 2, name: "STI-Imaging", platform: "Java Application" },
      { id: 3, name: "Clarity", platform: "iPhone App" }
    ];

    return (
      <div id="LandingContainer">
        <LandingHeader onScroll={this.handleScroll.bind(this)} />
        <Canvas />
        <SplashLanding />
        <div className="LandingSeperation" />
        <AboutLanding />
        <div className="LandingSeperation" />
        <div className="ProjectsSection" id="Projects">
          <div className="ProjectContainer">
            {projects.map(project => {
              return <ProjectWidget project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
