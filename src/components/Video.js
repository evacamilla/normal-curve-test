import React, { Component } from 'react';
import Button from './Button.js';
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
      <main>
        <div className="VideoImage-container">
          <img src={VideoImage} alt="" />
        </div>

          <div className="btn-wrapper">
            <div className="btn-prev-div">
              <NavLink exact to="/introduktion" onClick={this.props.showStepOne}>
                <Button text="Föregående" className="btn btn-prev" />
              </NavLink>
            </div>

            <div className="btn-next-div">
              <NavLink exact to="/fyllidinasvar">
                <Button text="Nästa" className="btn btn-next" />
              </NavLink>
            </div>
          </div>
      </main>
    );
  }
}

export default Video;
