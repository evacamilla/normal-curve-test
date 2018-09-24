import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Video extends Component {
  state = {
    chapter: 'Se filmen'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  previousPage = () => {
    console.log(' prev from Video');
  };

  nextPage = () => {
    window.location.assign('/fyllidinasvar');
  };

  render() {
    return (
      <div>
        <p>VIDEO</p>
        <BtnChangePage
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
      </div>
    );
  }
}

export default Video;
