import React, { Component } from "react";
import { func } from "prop-types";
import "./styles/LandingHeader.scss";

export default class LandingHeader extends Component {
  static propTypes = {
    onScroll: func
  };

  state = {
    selectedHeading: "Home"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleColorChange.bind(this));
  }

  handleColorChange() {
    const header = document.getElementById("LandingHeader");
    const about = document.getElementById("About");
    // const experience = document.getElementById("ExperienceSep");
    // const projects = document.getElementById("ProjectSep");
    // const resume = document.getElementById("ResumeDownload");

    //making header appear
    if (window.pageYOffset > about.offsetTop - 5) {
      header.style.opacity = "1";
    } else {
      header.style.opacity = "0";
    }

  }

  handleSelectSection(section) {
    this.setState({ selectedHeading: section }, () => {
      this.props.onScroll(section);
    });
  }

  render() {
    const sections = ["Home", "About", "Experience", "Projects"];
    const windowWidth = window.innerWidth

    return (
      <div id="LandingHeader">
        <a href="files/Mackenzie-Higa-Resume.pdf" id="ResumeDownload" download>
          <div id="LandingResume">
            resuMe
          </div>
        </a>
        {
          windowWidth > 700 ?
          <div id="LandingHeaderInner">
            {sections.map(section => {
              return (
                <div
                  className="SectionHeading"
                  key={section}
                  onClick={this.handleSelectSection.bind(this, section)}
                >
                  <p>
                    <b>{section}</b>
                  </p>
                </div>
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
