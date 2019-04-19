import React from "react";
import "./styles/ProjectWidget.scss";

export default function ProjectWidget({ project }) {
    return (
      <div className="ProjectWidget">
       <a href={project.link} target="_blank" rel="noopener noreferrer" >
        <div className="WidgetExpanded">
          <div className="ProjectMain">
            <div className="ProjectImageContainer">
              <img className="ProjectImage" src={`images/${project.image}`} alt={project.name} />
            </div>
            <div className="ProjectDesc">
              <div className="ProjectHeader">
                <p className="ProjectName">{project.name}</p>
              </div>
              <p className="ProjectText">{project.desc}</p>
            </div>
          </div>
        </div>
        </a>
      </div>
    );
}
