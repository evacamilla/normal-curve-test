import React, { Component } from 'react';
import Button from './Button.js';
import NextButton from './NextButton.js';
import { NavLink } from 'react-router-dom';
import VideoImage from '../images/Skärmavbild 2018-10-01 kl. 09.53.29.png';

class Video extends Component {
  state = {
    chapter: 'Se filmen'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    return (
      <div className="video-wrapper">
        <div className="white-background">
          <main>
            <div className="video-div">
              <img src={VideoImage} alt="" />
            </div>
          </main>
        </div>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <NavLink exact to="/introduktion">
              Tillbaka
            </NavLink>
          </div>

          <div className="btn-next-div">
            <NavLink exact to="/fyllidinasvar">
              <NextButton />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
