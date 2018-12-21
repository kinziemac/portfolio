import React, { Component } from "react";
import ProjectWidget from "./ProjectWidget";
import "./styles/ProjectLanding.scss";

export default class ProjectLanding extends Component {
  
  render() {
    const projects = [
      { name: "Spatio Temporal Imaging", 
        date: "Mar 2018", 
        platform: "Java Application", 
        image: "images/STI-Imaging.png"
      },
      { name: "FlixFinder",
        date: "Nov 2017", 
        platform: "Chrome Extension", 
        image: "images/FlixFinder.png"
      },
      { name: "Clarity Hierarchy", 
        date: "Apr 2017", 
        platform: "iOS App", 
        image: "images/ClarityHierarchy.png"
      }
    ];
    

    return (
      <div className="ProjectsSection" id="Projects">
        <p id="ProjectTitle">Projects</p>
        <div id="ProjectContainer">
          <div id="WidgetContainer">
            {projects.map( project => {
              return (
              <ProjectWidget 
                project={project} 
                key={project.name} />);
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
