import React, { Component } from 'react';
import LandingHeader from './LandingHeader';
import ProjectWidget from './ProjectWidget';
import './styles/LandingContainer.scss';

export default class LandingContainer extends Component {
  handleScroll(section) {
    const body = document.getElementById(section);
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
          <p>
            <b>Mackenzie</b>
          </p>
          <p>Higa</p>
          <div className="FadeToWhiteBottom" />
        </div>
        <div className="AboutSection" id="ABOUT">
          <div className="WhiteBlock" />
          <div className="AboutInner">
            <img
              className="DeerImage"
              src={require('../../images/ProjectsImageSide.jpg')}
            />
            <div className="AboutTextContainer">
              <p>
                <b>About</b> Me
              </p>
              <div className="AboutText">
                <p>
                  Hello! My name is Mackenzie Higa, and I am a Vancouver-based
                  Software Developer. Most of my work is in Web Development
                  through React JS, but I also have experience creating Java
                  Applications, IOS Apps (Swift) and general C/C++ programming.{' '}
                  <br />
                  <br />While I’m not coding, I’m either playing an instrument,
                  going to the gym or binging an entire Netflix series.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="SectionSplit" />
        <div className="ProjectsSection" id="PROJECTS">
          <p className="ProjectText">
            <b>Projects</b>
          </p>
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
