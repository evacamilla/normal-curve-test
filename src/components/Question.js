import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    heading: allaFragor[0].heading,
    question: allaFragor[0].question,
    questionIndex: 0
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  showNextQuestion = () => {
    let i = this.state.questionIndex + 1;
    if (i <= 9) {
      this.setState({ heading: allaFragor[i].heading });
      this.setState({ question: allaFragor[i].question });
      this.setState({ questionIndex: this.state.questionIndex + 1 });
      console.log(i);
    }
  };

  completeTest = () => {
    if (this.props.filledInAllAnswers) {
      window.location.assign('/resultat');
    } else {
      console.log('du måste fylla i alla svar');
    }
  };

  render() {
    let button = '';

    if (this.state.questionIndex <= 8) {
<<<<<<< HEAD
      button = (<button onClick={this.showNextQuestion}>Nästa</button>);
      
    } else {
     button = (<button onClick={this.completeTest}>Lämna in svar</button>);
=======
      blabla = <button onClick={this.showNextQuestion}>Nästa</button>;
    } else {
      blabla = <button onClick={this.completeTest}>Lämna in svar</button>;
>>>>>>> 26fbdab9e47d0d993f81d7cf91170f5665714ba5
    }

    return (
      <div>
        <h1>{this.state.heading}</h1>
        <p>{this.state.question}</p>
        {button}
      </div>
    );
  }
}

let allaFragor = [
  {
    heading: 'Nedstämdhet',
    question:
      'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: 'Sänkt grundstämming',
    question: 'Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: 'Rubrik 3',
    question: 'Fråga 3 ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '4 Sänkt grundstämming',
    question: '4 Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '5 Sänkt grundstämming',
    question: '5 Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '6 Nedstämdhet',
    question:
      '6 Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '7 Sänkt grundstämming',
    question: '7 Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '8 Sänkt grundstämming',
    question: ' Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '9 Sänkt grundstämming',
    question: '9 Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    heading: '10 Sänkt grundstämming',
    question: '10 Avser en sänkning av det emotionella... ',
    answer: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  }
];
export default Question;
