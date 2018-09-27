import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
import { Link } from 'react-router-dom';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    showInstructions: true,
    heading: allaFragor[0].heading,
    question: allaFragor[0].question,
    answers: allaFragor[0].answers,
    questionIndex: 0,
    totalPoints: 0,
    chosenAnswer: 0
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

  temporaryAnswer = event => {
    this.setState({ chosenAnswer: event.target.id });
  };

  toggleShowInstructions = () => {
    this.setState({ showInstructions: !this.state.showInstructions });
  };

  render() {
    let button = '';

    if (this.state.questionIndex <= 8) {
      button = <button onClick={this.showNextQuestion}>Nästa</button>;
    } else {
      button = <button onClick={this.completeTest}>Lämna in svar</button>;
    }

    let answers = this.state.answers;
    let answersDiv = [];
    let li = '';
    let id = 1;

    answers.forEach(function(answer, index) {
      li = (
        <li key={index} id={id}>
          <div className="myDiv">{id}</div>
          {answer}
        </li>
      );
      answersDiv.push(li);
      id += 1;
    });

    return (
      <div>
        {this.state.showInstructions ? (
          <div className="introduction">
            <h1>Instruktioner om steg 2</h1>
            <p>
              användaren ska fylla i sina svar digitalt. Förklara varför.
              <br />
              visa graf i form av bild
            </p>

            <button>
              <Link exact={true} to="/sefilmen">
                Föregående sida
              </Link>
            </button>
            <button onClick={this.toggleShowInstructions}>Nästa</button>
          </div>
        ) : (
          <div className="question">
            <h1>{this.state.heading}</h1>
            <p>{this.state.question}</p>
            <p>Du har valt alternativ: {this.state.chosenAnswer}</p>
            <div onClick={this.temporaryAnswer}>{answersDiv}</div>

            {button}
          </div>
        )}
      </div>
    );
  }
}

let allaFragor = [
  {
    id: 1,
    heading: '1 Nedstämdhet',
    question:
      '1 Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 2,
    heading: '2 Sänkt grundstämming',
    question: '2 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 3,
    heading: '3 Rubrik',
    question: '3 Fråga ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 4,
    heading: '4 Sänkt grundstämming',
    question: '4 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 5,
    heading: '5 Sänkt grundstämming',
    question: '5 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 6,
    heading: '6 Nedstämdhet',
    question:
      '6 Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 7,
    heading: '7 Sänkt grundstämming',
    question: '7 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 8,
    heading: '8 Sänkt grundstämming',
    question: ' Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 9,
    heading: '9 Sänkt grundstämming',
    question: '9 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 10,
    heading: '10 Sänkt grundstämming',
    question: '10 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  }
];
export default Question;
