import React, { Component } from "react";
import "./styles/ExperienceContainer.scss";
import ExperienceWidget from "./ExperienceWidget";
import ProjectsInfo from "Components/ProjectsInfo"

export default class ExperienceContainer extends Component {
  render() {
    const jobsExperience = ProjectsInfo.getWorkExperience()

    return (
      <div className="ExperienceContainer" id="Experience">
        <p id="ExperienceTitle">Experience</p>
        <div id="ExperienceHeaderPhoto"/>
        <p id="ExperienceText">
          This section highlights my career as a professional software developer. 
          I've worked in small and large companies, with web technologies and desktop applications, 
          and in software testing and development. I am always pursuing opportunties that allow me 
          to grow and try out different fields in the computer science industry.
        </p>
        <div id="ExperienceInner">
          <div id="WorkContainer">
            {
              jobsExperience.map((job, i) => {
                const jobLength = jobsExperience.length
                return (
                  <ExperienceWidget job={job} finalJob={i === (jobLength - 1)} />

                )
              })
            }
          </div>

        </div>
       
      </div>
    );
  }
}