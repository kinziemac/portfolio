import React, { Component } from 'react';
import LandingHeader from './LandingHeader';
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
          <div className="Project">
            <p>Project 1</p>
          </div>
          <div className="Project">
            <p>Project 2</p>
          </div>
          <div className="Project">
            <p>Project 3</p>
          </div>
          <div className="Project">
            <p>Project 4</p>
          </div>
        </div>
      </div>
    );
  }
}
