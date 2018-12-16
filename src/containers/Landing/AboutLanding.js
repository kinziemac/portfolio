import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiTriangle } from '@mdi/js'
import "./styles/AboutLanding.scss";

export default class AboutLanding extends Component {
  render() {
    return (
      <div className="AboutLanding" id="About">
        <div id="AboutCenterPiece"/>
        <div id="AboutInner">
          <div id="AboutContent">
            
            <div id="PersonalDescription">
            {/* Download Link <a href="files/Mackenzie-Higa-Resume.pdf" download></a> */}
              <p id="AboutTitle">about Me</p>
              <p>
                Hello! My name is Mackenzie Higa and I’m a software engineer and
                web developer from Vancouver, BC. Currently, I'm in my final year at 
                Simon Fraser University to complete my Bachelor's of Computer Science.
              </p> 
              <br />
              <p>
                My focus is directed primarily on frontend development, but I also have a passion for 
                operating systems, backend web development, and iOS development. 
                I also dabble in writing technical articles that can be found on my  
                <a href="https://medium.com/@mackenziehiga" target="_blank" rel="noopener noreferrer">
                Medium
                </a>  profile.
              </p>
              <br />
              <p>
                While I’ve lived in Vancouver for my near my entire life and consider myself a true Canadian, 
                I was born in San Francisco, CA. so working in the US is not a problem for me. 
              </p>
              <br />
              <p>
                Outside of the computer science world, some of my other interests include:
                <br />
                <Icon path={mdiTriangle}
                  size={0.5}
                  // horizontal
                  // vertical
                  rotate={90}
                  color="black"
                  />  Hiking
                <br />
                <Icon path={mdiTriangle}
                  size={0.5}
                  // horizontal
                  // vertical
                  rotate={90}
                  color="black"
                  />  Rock Climbing
                <br />
                <Icon path={mdiTriangle}
                  size={0.5}
                  // horizontal
                  // vertical
                  rotate={90}
                  color="black"
                  />  Fitness
                <br />
                <Icon path={mdiTriangle}
                  size={0.5}
                  // horizontal
                  // vertical
                  rotate={90}
                  color="black"
                  />  International Volunteering
                <br />
                <Icon path={mdiTriangle}
                  size={0.5}
                  // horizontal
                  // vertical
                  rotate={90}
                  color="black"
                  />  Instruments
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
