import React, { Component } from "react";
// import { LandingContainer } from "./Containers/Landing";
import SplashLanding from "../Splash/SplashLanding";
import AboutLanding from "Containers/About/AboutLanding";
import ExperienceContainer from "Containers/Experience/ExperienceContainer";
import SplashHome from "../Splash/SplashHome"
import ProjectLanding from "../Projects/ProjectLanding";
import LandingHeader from "../Splash/Header";
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom'
import "./App.scss";

class App extends Component {
  initializeReactGA() {
    ReactGA.initialize('UA-131266047-1');
    ReactGA.pageview('/');
  }

  render() {
    this.initializeReactGA()
    return (
      <div id="App">
        <LandingHeader />
        <div id="AppContainer">
          <SplashLanding />
          {/* <Route path="/" exact component={SplashLanding} /> */}
          <Route path="/" exact component={SplashHome} />
          <Route path="/about" exact component={AboutLanding} />
          <Route path="/experience" exact component={ExperienceContainer} />
          <Route path="/projects" exact component={ProjectLanding} />
          {/* <LandingContainer/> */}
        </div>
      </div>

    );
  }
}

export default App;
