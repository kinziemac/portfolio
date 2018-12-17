import React from "react";
import Icon from '@mdi/react';
import { mdiGithubCircle, mdiLinkedinBox, mdiMedium } from '@mdi/js'
import "./styles/AboutIcons.scss";

export default function AboutIcons(props) {
    return (
        <div id="AboutIconsContainer">
            <a href="https://github.com/kinziemac" target="_blank" rel="noopener noreferrer">
                <Icon path={mdiGithubCircle}
                    className="Icons"
                    size={1.2}
                    style={{cursor: "pointer"}}
                    />
            </a>
            <a href="https://www.linkedin.com/in/mackenzie-higa/" target="_blank" rel="noopener noreferrer">
                <Icon path={mdiLinkedinBox}
                    className="Icons"
                    size={1.2}
                    style={{cursor: "pointer"}}
                    />
            </a>
            <a href="https://medium.com/@mackenziehiga" target="_blank" rel="noopener noreferrer">
                <Icon path={mdiMedium}
                    className="Icons"
                    size={1.2}
                    style={{cursor: "pointer"}}
                    />
            </a>
        </div>
    )
}