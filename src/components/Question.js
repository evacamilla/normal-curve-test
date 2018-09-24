import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    heading: allaFragor[0].heading,
    question: allaFragor[0].question,
    questionIndex: 0
  };

  //componentDidMount = () => {
  //this.props.changeChapter(this.state.chapter);
  //};

  showOneQuestion = index => {
    this.setState({ heading: allaFragor[index].heading });
  };

  showNextQuestion = () => {
    let i = this.state.questionIndex;
    this.setState({ heading: allaFragor[i].heading });
    this.setState({ questionIndex: this.state.questionIndex + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <p>{this.state.question}</p>
        <button onClick={this.showNextQuestion}>Nästa</button>
      </div>
    );
  }
}

let allaFragor = [
  {
    heading: 'Nedstämdhet',
    question:
      'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”'
  },
  {
    heading: 'Sänkt grundstämming',
    question: 'Avser en sänkning av det emotionella... '
  }
];
export default Question;
