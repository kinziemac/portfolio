import React, { Component } from "react";
import './styles/TransitionBackground.scss'

export default class LandingContainer extends Component {

    render() {
        return(
            <div id="TransitionBackground">
                <div id="LightLayer"/>
                <div id="DarkLayer"/>
            </div>
        )
    }



}