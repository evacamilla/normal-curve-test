import React, { Component } from 'react';
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
      <div>
        <div className="VideoImage-container">
          <img src={VideoImage} alt="" />
        </div>
        <button>
          <NavLink exact to="/introduktion" onClick={this.props.showStepOne}>
            Föregående sida
          </NavLink>
        </button>

        <button>
          <NavLink exact to="/fyllidinasvar">
            Nästa sida
          </NavLink>
        </button>
      </div>
    );
  }
}

export default Video;
