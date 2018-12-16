import React, { Component } from "react";
import Particles from "react-particles-js";
import "./styles/Canvas.scss";

export default class Canvas extends Component {
  render() {
    // const mobileParams = 15;

    return (
      <div id="Canvas">
        <Particles params={{ particles: { number: { value: 90 } } }} />
      </div>
    );
  }
}
