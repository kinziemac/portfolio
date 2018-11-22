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
    const header = document.getElementById("LandingHeaderInner");
    const ele = document.getElementById("AboutInner");
    const totalHeight = ele.offsetHeight + ele.offsetTop;
    if (
      window.pageYOffset > ele.offsetTop - 35 &&
      window.pageYOffset < totalHeight - 35
    ) {
      header.style.color = "#041534";
    } else {
      header.style.color = "white";
    }
  }

  handleSelectSection(section) {
    this.setState({ selectedHeading: section }, () => {
      this.props.onScroll(section);
    });
  }

  render() {
    const sections = ["Home", "About", "Projects"];
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
