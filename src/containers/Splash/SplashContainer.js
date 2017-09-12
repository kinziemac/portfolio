import React, { Component } from 'react'
import SplashImage from 'images/SplashImage-3.jpg'
import './styles/SplashContainer.scss'

export default class SplashContainer extends Component {
  render() {
    return (
      <div id="SplashContainer">
        {/*<img src={SplashImage} id="SplashImage" alt="night time snow sky" />*/}
        <div id="SplashImage" />
        <div id="SplashText">
          <h2>Welcome to React</h2>
        </div>
      </div>
    )
  }
}
