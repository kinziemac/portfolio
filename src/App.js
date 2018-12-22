import React, { Component } from "react";
import { LandingContainer } from "./Containers/Landing";
import ReactGA from 'react-ga';
import "./App.css";

class App extends Component {
  initializeReactGA() {
    ReactGA.initialize('UA-131266047-1');
    ReactGA.pageview('/');
  }

  render() {
    this.initializeReactGA()
    return <LandingContainer />;
  }
}

export default App;
