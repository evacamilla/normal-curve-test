import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Video extends Component {
  state = {
    chapter: 'Video'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    return (
      <div>
        <p>VIDEO</p>
        <BtnChangePage />
      </div>
    );
  }
}

export default Video;
