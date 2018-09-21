import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';

class Result extends Component {
  state = {
    chapter: 'Resultat'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    return (
      <div>
        <h1>Resultat</h1>
        <p>Du är godgänd</p>
        <BtnChangePage />
      </div>
    );
  }
}

export default Result;
