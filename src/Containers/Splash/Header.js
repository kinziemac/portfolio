import React, { Component } from "react";
import { func } from "prop-types";
import "./styles/Header.scss";
import { Link } from 'react-router-dom'

export default class LandingHeader extends Component {
  static propTypes = {
    onScroll: func
  };

  state = {
    selectedHeading: "Home"
  };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleColorChange.bind(this));
  // }

  // handleColorChange() {
  //   const header = document.getElementById("LandingHeader");
  //   const about = document.getElementById("About");
    
  //   //making header appear
  //   if (window.pageYOffset > about.offsetTop - 5) {
  //     header.style.opacity = "1";
  //   } else {
  //     header.style.opacity = "0";
  //   }

  // }

  handleSelectSection(section) {
    this.setState({ selectedHeading: section });
  }

  render() {
    const sections = ["home", "about", "projects", "experience"];
    // const sections = ["home", "about", "projects"];
    const windowWidth = window.innerWidth

    return (
      <div id="LandingHeader">
        {/* <a href="files/Mackenzie-Higa-Resume.pdf" id="ResumeDownload" download>
          <div id="LandingResume">
            RESUME
          </div>
        </a> */}
        {
          windowWidth > 700 ?
          <div id="LandingHeaderInner">
            {sections.map(section => {
              return (
                <Link to={`/${section === "home" ? '' : section.toLowerCase()}`} key={section}>
                  <div
                    className="SectionHeading"
                    
                    onClick={this.handleSelectSection.bind(this, section)}
                  >
                    <p>
                      <b>{section.toUpperCase()}</b>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          :
          <none />
        }
      </div>
    );
  }
}
