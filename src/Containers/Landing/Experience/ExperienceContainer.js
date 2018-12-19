import React, { Component } from "react";
import "./styles/ExperienceContainer.scss";
import ExperienceWidget from "./ExperienceWidget";

export default class ExperienceContainer extends Component {
  render() {
    const jobsExperience = [
      { title: "Web Developer",
        company: "MuseFind",
        companyLink: "https://musefind.com/",
        dates: "Oct 2016 - May 2018",
        techs: ["html-css.png", "react.png"],
        descriptions: [
          "Web developer for MuseFind, a SaaS company offering a relationship management platform",
          "Developed primarily in JavaScript (React), HTML & CSS (SASS) to create frontend application",
          "Developed interface with Instagram and Facebook APIs to store profile data",
          "Created automated testing suite for platform with Jest and Enzyme frameworks",
          "Member of workplace culture committee, planned monthly bonding events for company"
        ]

      },
      { title: "Computer Science Tutor",
        company: "Core Academy",
        companyLink: "http://www.thecoreacademy.com/",
        dates: "Jan 2016 - May 2016",
        techs: ["java.svg"],
        descriptions: [
          "Tutored students in preparation for first-year computer science",
          "Created lesson sets to teach the fundamentals of computer science",
          "Introduced Java to students, and used Eclipse and IntelliJ IDEs"
        ]
      },  
      { title: "QA Analyst II",
        company: "BestBuy",
        companyLink: "https://www.bestbuy.ca/",
        dates: "May 2015 - Nov 2015",
        techs: ["cpp.png"],
        descriptions: [
          "QA Test Analyst II for BestBuy Canada's eCommerce operations, both web and mobile platforms",
          "Ran regression tests for new web/mobile releases to eliminate manual testing",
          "Created automated tests in C++ to increase speed in workflow"
        ]
      }
    ]

    return (
      <div className="ExperienceContainer" id="Experience">
      <p id="ExperienceTitle">eXperience</p>
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