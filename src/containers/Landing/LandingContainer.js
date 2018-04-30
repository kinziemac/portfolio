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
    const projects = [
      { id: 1, name: 'FlixFinder', platform: 'Chrome Extension' },
      { id: 2, name: 'STI-Imaging', platform: 'Java Application' },
      { id: 3, name: 'Clarity', platform: 'iPhone App' }
    ];

    return (
      <div id="LandingContainer">
        <LandingHeader onScroll={this.handleScroll.bind(this)} />
        <div className="SplashLanding" id="HOME">
          <h2>HOME</h2>
        </div>
        <div className="LandingSeperation">
          <div className="ImageHolder" />
          <div className="Slider">
            <h2>MACKENZIE HIGA</h2>
            <p>
              Web Developer and Fourth Year CS Student at Simon Fraser
              University
            </p>
          </div>
        </div>
        <div className="ProjectsSection" id="PROJECTS">
          <h2>PROJECTS</h2>
          <div className="ProjectContainer">
            {projects.map(project => {
              return <ProjectWidget project={project} key={project.id} />;
            })}
          </div>
        </div>
        <div className="FooterSection" id="EXTRA" />
      </div>
    );
  }
}
