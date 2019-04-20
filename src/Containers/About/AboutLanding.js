import React, { Component } from "react";
import AboutIcons from "./AboutIcons"
import AboutInterests from "./AboutInterests"
import UnderlineWords from 'Components/UnderlineWords.js'
import "./styles/AboutLanding.scss";

export default class AboutLanding extends Component {
  render() {
    const usText = "While I’ve lived in Vancouver for almost my entire life and consider myself a true Canadian, I was born in San Francisco, CA. so working in the US is not a problem for me. "
    const hobbyText = "Outside of the computer science world, some of my other interests include:"
    return (
      <div className="AboutLanding" id="About">
        <div id="AboutInner">
          <div id="AboutContent">
            <p id="AboutTitle">About Me</p>
            <div id="AboutImageIcons">
              
              <div id="PersonalImageContainer">
                <img id="PersonalImage" src="images/mackenzie.png" alt="Mackenzie" />
              </div>
              <AboutIcons />
            </div>
            <div id="PersonalDescription">
              <p>
                Hello! My name is Mackenzie Higa and I’m a software engineer and 
                web developer from Vancouver, BC. Currently, I'm in my final year 
                at <a href="https://www.sfu.ca/computing.html" target="_blank" rel="noopener noreferrer">
                <UnderlineWords word="Simon Fraser University" />
                </a> to complete my Bachelor's of Computer Science.
              </p> 
              <p>
                My focus is directed primarily on frontend development, but I also have a passion for 
                operating systems, backend web development, and iOS development. 
                I also dabble in writing technical articles that can be 
                found on my <a href="https://medium.com/@mackenziehiga" target="_blank" rel="noopener noreferrer">
                  <UnderlineWords word="Medium" />
                </a> profile.
              </p>
              <p>
                {usText}
              </p>
              <p>
                {hobbyText}
                <AboutInterests />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
