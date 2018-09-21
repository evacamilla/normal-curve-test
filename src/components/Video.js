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
    console.log('next from Video');
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
