import React, { Component } from 'react';
import LandingHeader from './LandingHeader';
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
        <div className="SplashLanding" id="Home">
          <h1>Mackenzie Higa</h1>
        </div>
        <div className="LandingSeperation">
          <h1>Middle</h1>
        </div>
        <div className="LandingSection" id="About">
          <h1>Body</h1>
        </div>
      </div>
    );
  }
}
