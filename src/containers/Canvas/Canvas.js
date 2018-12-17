import React, { Component } from "react";
import Particles from "react-particles-js";
import "./styles/Canvas.scss";

export default class Canvas extends Component {
  render() {
    let particleCount = 90;
    if (700 < window.innerWidth && window.innerWidth < 900) {
      particleCount = 40;
    } else if (window.innerWidth <= 700) {
      particleCount = 10;
    }

    return (
      <div id="Canvas">
        <Particles params={{ particles: { number: { value: particleCount } } }} />
      </div>
    );
  }
}
