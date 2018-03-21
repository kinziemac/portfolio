import React, { Component } from 'react';
import LandingHeader from './LandingHeader';
import ProjectWidget from './ProjectWidget';
//import LoadingLines from './LoadingLines';
import './styles/LandingContainer.scss';

export default class LandingContainer extends Component {
  handleScroll(section) {
    const body = document.getElementById(section); //.getBoundingClientRect();
    if (body) {
      body.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  render() {
    const projects = [];
    for (let i = 0; i < 4; i++) {
      projects.push(i);
    }

    return (
      <div id="LandingContainer">
        <LandingHeader onScroll={this.handleScroll.bind(this)} />
        <div className="SplashLanding" id="HOME" />
        <div className="LandingSeperation">
          <div className="ImageHolder" />
          {/*LoadingLines />*/}
        </div>
        <div className="AboutSection" id="ABOUT" />
        <div className="LandingSeperation" />
        <div className="ProjectsSection" id="PROJECTS">
          {projects.map(project => {
            return <ProjectWidget projectNumber={project} key={project} />;
          })}
        </div>
      </div>
    );
  }
}
