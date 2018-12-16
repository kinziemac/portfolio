import React, { Component } from "react";

import "./styles/ProjectWidget.scss";

export default class ProjectWidget extends Component {
  render() {
    const { project } = this.props;
    let projectName = project.name;
    if (project.name === "FlixFinder") {
      projectName = "netflixextension";
    } else if (project.name === "Clarity") {
      projectName = "ClarityHierarchy";
    } else if (project.name === "STI-Imaging") {
      projectName = "sti-imaging";
    }

    return (
      <div className="ProjectWidget">
        <p>Widget</p>
        <p>{projectName}</p>
      </div>
    );
  }
}

// return (
//   <a
//     href={`https://github.com/kinziemac/${projectName}`}
//     target="_blank"
//     rel="noopener noreferrer">
//     <div className="Project">
//       <div className={`ProjectImage ${projectName}`} />
//       <p>{project.name.toUpperCase()}</p>
//       <p>{project.platform}</p>
//     </div>
//   </a>
// );
