import React, { Component } from 'react';
import { func } from 'prop-types';
import './styles/LandingHeader.scss';

export default class LandingHeader extends Component {
  static propTypes = {
    onScroll: func
  };

  handleOnScroll(section) {
    this.props.onScroll(section);
  }

  render() {
    const sections = ['Home', 'About', 'Projects', 'Extra'];
    return (
      <div id="LandingHeader">
        {sections.map(section => {
          return (
            <div className="SectionHeading" key={section}>
              <p onClick={this.handleOnScroll.bind(this, section)}>{section}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
