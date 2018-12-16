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
    const ele = document.getElementById("About");
    const totalHeight = ele.offsetHeight + ele.offsetTop;

    //making header appear
    if (window.pageYOffset > ele.offsetTop - 35) {
      header.style.opacity = "1";
    } else {
      header.style.opacity = "0";
    }

    //making box shadow appear
    if (window.pageYOffset > totalHeight - 35) {
      header.style.boxShadow = "0px 0px";
      header.style.background = "white";
      header.style.color = "black";

    } else if (window.pageYOffset > ele.offsetTop - 35) {
      header.style.boxShadow = "1px 1px 10px 1px #797777";
      header.style.background = "black";
      header.style.color = "white";
    }
  }

  handleSelectSection(section) {
    this.setState({ selectedHeading: section }, () => {
      this.props.onScroll(section);
    });
  }

  render() {
    const sections = ["Home", "About", "Experience", "Projects"];
    return (
      <div id="LandingHeader">
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
      </div>
    );
  }
}
