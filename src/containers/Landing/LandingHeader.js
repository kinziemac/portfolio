import React, { Component } from 'react';
import { func } from 'prop-types';
import './styles/LandingHeader.scss';

export default class LandingHeader extends Component {
  static propTypes = {
    onScroll: func
  };

  state = {
    selectedHeading: 'HOME'
  };

  handleSelectSection(section) {
    this.setState({ selectedHeading: section }, () => {
      this.props.onScroll(section);
    });
  }

  render() {
    const sections = ['HOME', 'ABOUT', 'PROJECTS'];
    const { selectedHeading } = this.state;
    return (
      <div id="LandingHeader">
        <div id="LandingHeaderInner">
          {sections.map(section => {
            return (
              <div
                className="SectionHeading"
                key={section}
                onClick={this.handleSelectSection.bind(this, section)}>
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
