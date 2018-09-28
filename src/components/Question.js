import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
import { Link } from 'react-router-dom';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    showInstructions: true,
    questionId: allaFragor[0].id,
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
      this.setState({ questionId: allaFragor[i].id });
      this.setState({ heading: allaFragor[i].heading });
      this.setState({ question: allaFragor[i].question });
      this.setState({ answers: allaFragor[i].answers });
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

    answers.forEach(function(answer, index) {
      li = (
        <li key={index} id={index}>
          <div className="myDiv">{index}</div>
          {answer}
        </li>
      );
      answersDiv.push(li);
      index += 1;
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

          <div className="question-wrapper">
            <div className="question">
              <h1>{this.state.questionId + " " + this.state.heading}</h1>
              <p>{this.state.question}</p>
            </div>
            <p>Du har valt alternativ: {this.state.chosenAnswer}</p>

            <div className="question-answers" onClick={this.temporaryAnswer}>{answersDiv}</div>

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
    heading: 'Nedstämdhet',
    question:
      'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känslor av sorgsenhet, olycklighet, hopplöshet och hjälplöshet.  Bedömningen baseras på intensitet, varaktighet och i  vilken grad sinnesstäm-ningen påverkas av yttre omständigheter. Förhöjd sinnesstämning skattas ”0”',
    answers: ['Svafewgwehwr 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 2,
    heading: 'Sänkt grundstämming',
    question: 'Avser en sänkning av det emotionella grundläget (till skillnad från situationsutlösta affekter). Omfattar dysterhet, tungsinne och nedstämdhet, som manifesterar sig i mimik, kroppshållning och rörelsemönster. Bedömningen baseras på utpräglingsgrad och avledbarhet.',
    answers: ['Neutral stämningsläge. Kan känna såväl tillfällig munterhet som nedstämdhet, allt efter omständigheterna, utan övervikt för ena eller andra stämningsläget.', '', 'Övervägande upplevelser av nedstämdhet men ljusare stunder förekommer.', '', 'Genomgående nedstämdhet och dyster till sinnes. Sinnesstämningen påverkas föga av yttre omständigheter.', '', 'Genomgående upplevelser av maximal nedstämdhet.']
  },
  {
    id: 3,
    heading: 'Rubrik',
    question: '3 Fråga ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 4,
    heading: 'Sänkt grundstämming',
    question: '4 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 5,
    heading: 'Sänkt grundstämming',
    question: '5 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 6,
    heading: 'Nedstämdhet',
    question:
      '6 Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känsloravsorgsenhet,olycklighet,hopplöshetochhjälplöshet.  Bedömningenbaseraspåintensitet,varaktighetochi  vilkengradsinnesstäm-ningenpåverkasavyttreomständigheter.Förhöjdsinnesstämningskattas”0”',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 7,
    heading: 'Sänkt grundstämming',
    question: '7 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 8,
    heading: 'Sänkt grundstämming',
    question: ' Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 9,
    heading: 'Sänkt grundstämming',
    question: '9 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 10,
    heading: 'Sänkt grundstämming',
    question: '10 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  }
];
export default Question;
