import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

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
        <p>VIDEO</p>
    
        <button>
          <NavLink
          exact={true}
          to="/introduktion"
          >
          Föregående sida
          </NavLink>
        </button>

        <button>
          <NavLink
          exact={true}
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
