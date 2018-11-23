import React, { Component } from "react";
import ProjectWidget from "./ProjectWidget";
import "./styles/ProjectLanding.scss";

export default class ProjectLanding extends Component {
  render() {
    const projects = [
      { id: 1, name: "FlixFinder", platform: "Chrome Extension" },
      { id: 2, name: "STI-Imaging", platform: "Java Application" },
      { id: 3, name: "Clarity", platform: "iPhone App" },
      { id: 4, name: "Clarity", platform: "iPhone App" },
      { id: 5, name: "Clarity", platform: "iPhone App" }
    ];

    return (
      <div className="ProjectsSection" id="Projects">
        <p id="ProjectTitle">Projects</p>
        <div id="ProjectContainer">
          <div id="WidgetContainer">
            {projects.map(project => {
              return <ProjectWidget project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

// return (
//   <div className="ProjectsSection" id="Projects">
//     <div id="ProjectContainer">
//       {projects.map(project => {
//         return <ProjectWidget project={project} key={project.id} />;
//       })}
//     </div>
//   </div>
// );
