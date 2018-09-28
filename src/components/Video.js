import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
    
        <button>
          <NavLink
          exact
          to="/introduktion"
          onClick={this.props.showStepOne}
          >
          Föregående sida
          </NavLink>
        </button>

        <button>
          <NavLink
          exact
          to="/fyllidinasvar"
          >
          Nästa sida
          </NavLink>
        </button>
      </div>
    );
  }
}

export default Video;
