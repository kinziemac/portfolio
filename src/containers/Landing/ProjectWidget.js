import React, { Component } from 'react';

import './styles/ProjectWidget.scss';

export default class ProjectWidget extends Component {
  render() {
    const { projectNumber } = this.props;

    return (
      <div className="Project">
        <div className="ProjectImage" />
        <p>PROJECT {projectNumber}</p>
      </div>
    );
  }
}
