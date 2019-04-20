import React, { Component } from "react";
import ProjectWidget from "./ProjectWidget";
import ProjectsInfo from "Components/ProjectsInfo"
import "./styles/ProjectLanding.scss";

export default class ProjectLanding extends Component {
  
  render() {
    const webProjects = ProjectsInfo.getWebInformation()
    const applicationProjects = ProjectsInfo.getProjectInformation()
    
    return (
      <div className="ProjectsSection" id="projects">
        <p id="ProjectTitle">Projects</p>
        <div id="ProjectImageHeader"></div>
        <div id="ProjectTextContainer">
          <p>Here are some projects I've worked on in the past. These include frontend, backend,
            and full stack applications. My goal is to use new languages and frameworks to help
            build my skills as a developer. These projects use languages like Go, React JS, Python,
            C++, Java, and Swift.
          </p>

        </div>
        <div id="ProjectContainer">
        <div className="WidgetContainer">
          <p className="WidgetSectionHeader">Websites</p>
            {webProjects.map( project => {
              return (
              <ProjectWidget 
                project={project} 
                key={project.name} />);
            })}
          </div>
          <div className="WidgetContainer">
          <p className="WidgetSectionHeader">Software Applications</p>
            {applicationProjects.map( project => {
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
