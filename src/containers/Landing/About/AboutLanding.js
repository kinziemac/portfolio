import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiTriangle} from '@mdi/js'
import AboutIcons from "./AboutIcons"
import UnderlineWords from '../../Components/UnderlineWords.js'
import "./styles/AboutLanding.scss";

export default class AboutLanding extends Component {
  render() {
    const interests = ["Hiking", "Rock Climbing", "Fitness", "International Volunteering", "Instruments"]
    const introText = "Hello! My name is Mackenzie Higa and I’m a software engineer and web developer from Vancouver, BC. Currently, I'm in my final year at Simon Fraser University to complete my Bachelor's of Computer Science."
    const usText = "While I’ve lived in Vancouver for almost my entire life and consider myself a true Canadian, I was born in San Francisco, CA. so working in the US is not a problem for me. "
    return (
      <div className="AboutLanding" id="About">
        <div id="AboutCenterPiece"/>
        <div id="AboutInner">
          <div id="AboutContent">
            <div id="PersonalDescription">
              <div id="TitleContainer">
                <p id="AboutTitle">about Me</p>
                <AboutIcons />
              </div>
              <p>
                {introText}
              </p> 
              <p>
                My focus is directed primarily on frontend development, but I also have a passion for 
                operating systems, backend web development, and iOS development. 
                I also dabble in writing technical articles that can be found on my <a href="https://medium.com/@mackenziehiga" target="_blank" rel="noopener noreferrer">
                  <UnderlineWords word="Medium" />
                </a> profile.
              </p>
              <p>
                {usText}
              </p>
              <p>
                Outside of the computer science world, some of my other interests include:
                {
                  interests.map(interest => {
                    return (
                      <div>
                      <Icon path={mdiTriangle}
                    size={0.5}
                    rotate={90}
                    color="black"
                    />  {interest}
                    </div>
                    )
                  })
                }
              </p>
            </div>
            <div id="PersonalImageContainer">
              <img id="PersonalImage" src="images/mackenzie.png" alt="Mackenzie" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
