import React, { Component } from 'react';
import './styles/LoadingLines.scss';

export default class LoadingLines extends Component {
  componentDidMount() {
    var elem = document
      .getElementById('ScrollingLines')
      .getBoundingClientRect();
    console.log(elem);
    setTimeout(this.myMove.bind(this), 3000);
  }

  myMove(elem) {
    var pos = 0;
    //var id = setInterval(frame, 10);
    console.log('happened');
    // function frame() {
    //   if (pos == 350) {
    //     clearInterval(id);
    //   } else {
    //     pos++;
    //     elem.top = pos + 'px';
    //   }
    // }
  }

  render() {
    return (
      <div id="LoadingLinesContainer">
        <div id="ScrollingLines">
          <div className="TopLoading" />
          <div className="MiddleLoading" />
          <div className="CenterLoading" />
          <div className="BottomLoading" />
          <div className="BottomLoading" />
          <div className="CenterLoading" />
          <div className="MiddleLoading" />
          <div className="TopLoading" />
        </div>
      </div>
    );
  }
}
