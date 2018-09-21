import React, { Component } from 'react';

class Video extends Component {
  state = {
    chapter: 'Video'
  };

  componentDidMount = () => {
      this.props.changeChapter(this.state.chapter);
  }

  render() {
    return (
      <div>
        <p>VIDEO</p>
      </div>
    );
}
}

export default Video;
