import React, { Component } from "react";
import ProjectWidget from "./ProjectWidget";
import "./styles/ProjectLanding.scss";

export default class ProjectLanding extends Component {
  
  render() {
    const projects = [
      { name: "Portfolio Website", 
        date: "Dec 2018", 
        desc: "Portfolio created in React JS to display experience, work, and general information about me.",
        platform: "React Appliaction", 
        link: "https://github.com/kinziemac/portfolio",
        image: "Portfolio.png",
        techs: [
          {
            name: "React JS",
            image: "react.png"
          },
          {
            name: "HTML & CSS (SASS)",
            image: "html-css.png"
          }
        ]
      },
      { name: "A* Search w/ GUI", 
        date: "Nov 2018",
        desc: 
          "Python application that uses A* search algorithm with Tkinter framework for the GUI.",
        platform: "Python Application", 
        link: "https://github.com/kinziemac/aStarUI",
        image: "AStarSearch.png",
        techs: [
          {
            name: "Python",
            image: "python.png"
          }
        ]
      },
      { name: "Spatio Temporal Imaging", 
        date: "Mar 2018",
        desc: "Java application that creates a spatio-temporal image to detect transitions in videos.",
        platform: "Java Application", 
        link: "https://github.com/kinziemac/sti-imaging",
        image: "STI-Imaging.png",
        techs: [
          {
            name: "Java",
            image: "java.svg"
          }
          // "JavaFX", 
          
          // "OpenCV"
        ]
      },
      { name: "FlixFinder",
        date: "Nov 2017", 
        desc: "Google Chrome extension that connects to theMovieDB for film ratings and reviews.",
        platform: "Chrome Extension", 
        link: "https://github.com/kinziemac/netflixextension",
        image: "FlixFinder.png",
        techs: [
          {
            name: "React JS",
            image: "react.png"
          },
          {
            name: "HTML & CSS (SASS)",
            image: "html-css.png"
          }
        ]
      },
      { name: "Clarity Hierarchy", 
        date: "Apr 2017", 
        desc: "iOS application to help people reduce anxiety with entertaining activities, calming steps, and voice memos.",
        platform: "iOS App", 
        link: "https://github.com/kinziemac/ClarityHierarchy",
        image: "ClarityHierarchy.png",
        techs: [
          {
            name: "Swift",
            image: "swift.png"
          },
        ]
      }
    ];
    
    return (
      <div className="ProjectsSection" id="projects">
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
