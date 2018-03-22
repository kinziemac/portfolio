import React, { Component } from 'react';

import './styles/ProjectWidget.scss';

export default class ProjectWidget extends Component {
  render() {
    const { projectNumber } = this.props;

    return (
      <a
        href="https://github.com/kinziemac/netflixextension"
        target="_blank"
        rel="noopener noreferrer">
        <div className="Project">
          <div className="ProjectImage" />
          <p>PROJECT {projectNumber}</p>
        </div>
      </a>
    );
  }
}
