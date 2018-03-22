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
    const sections = ['HOME', 'ABOUT', 'PROJECTS', 'EXTRA'];
    const { selectedHeading } = this.state;
    return (
      <div id="LandingHeader">
        <div id="LandingHeaderInner">
          {sections.map(section => {
            return (
              <div
                className={
                  selectedHeading === section
                    ? 'SectionHeading Selected'
                    : 'SectionHeading'
                }
                key={section}
                onClick={this.handleSelectSection.bind(this, section)}>
                <p>{section}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
