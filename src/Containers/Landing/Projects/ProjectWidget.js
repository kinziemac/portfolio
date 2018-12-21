import React from "react";
import "./styles/ProjectWidget.scss";

export default function ProjectWidget({ project }) {
    return (
      <div className="ProjectWidget">
        <div className="WidgetExpanded">
          <div className="ProjectMain">
            <div className="ProjectImageContainer">
              <img className="ProjectImage" src={project.image} alt={project.name} />
            </div>
            <div className="ProjectDesc">
              <div className="ProjectHeader">
                <p className="ProjectName">{project.name}</p>
                <p className="ProjectDate">{project.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
