import React, { Component } from 'react';
import Button from './Button.js';
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

  showPreviousQuestion = () => {
    if (this.state.questionIndex === 0) {
      this.setState({ showInstructions: true });
    } else {
      let i = this.state.questionIndex - 1;
      this.setState({ questionId: allaFragor[i].id });
      this.setState({ heading: allaFragor[i].heading });
      this.setState({ question: allaFragor[i].question });
      this.setState({ answers: allaFragor[i].answers });
      this.setState({ questionIndex: this.state.questionIndex - 1 });
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
    console.log(event.target);
  };

  toggleShowInstructions = () => {
    this.setState({ showInstructions: !this.state.showInstructions });
  };

  render() {
    let answers = this.state.answers;
    let answersDiv = [];
    let li = '';

    answers.forEach(function(answer, index) {
      li = (
        <li key={index} id={index}>
          <div id={index} className="question-point">
            {index}
          </div>
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

            <Link exact to="/sefilmen">
              <Button text="Föregående sida" className="btn btn-prev" />
            </Link>

            <Button
              text="Nästa"
              className="btn btn-next"
              onClick={this.toggleShowInstructions}
            />
          </div>
        ) : (
          <div className="question-wrapper">
            <div className="question">
              <h1>{this.state.questionId + '. ' + this.state.heading}</h1>
              <p>{this.state.question}</p>
            </div>
            <p>Du har valt alternativ: {this.state.chosenAnswer}</p>

            <div className="question-answers" onClick={this.temporaryAnswer}>
              {answersDiv}
            </div>

            <Button
              text="Föregående"
              className="btn btn-prev"
              onClick={this.showPreviousQuestion}
            />

            {this.state.questionIndex <= 8 ? (
              <Button
                text="Nästa"
                className="btn btn-next"
                onClick={this.showNextQuestion}
              />
            ) : (
              <Button
                text="Lämna in"
                className="btn"
                onClick={this.completeTest}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

let allaFragor = [
  {
    id: 1,
    heading: 'Sänkt Grundstämning',
    question:
      'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.  Omfattar känslor av sorgsenhet, olycklighet, hopplöshet och hjälplöshet.  Bedömningen baseras på intensitet, varaktighet och i  vilken grad sinnesstäm-ningen påverkas av yttre omständigheter. Förhöjd sinnesstämning skattas ”0”',
    answers: [
      'Neutralt stämningsläge',
      '',
      'Ser genomgående nedstämd ut, men kan tillfälligt växla till ljusare sinnesstämning.',
      'Svar4',
      'Ser nedstämd och olycklig ut oavsett samtalsämne.',
      '',
      'Genomgående uttryck för extrem dysterhet, tungsinne eller förtvivlad olycka.'
    ]
  },
  {
    id: 2,
    heading: 'Nedstämdhet',
    question:
      'Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.Omfattar känslor av sorgsenhet, olycklighet, hopplöshet och hjälplöshet.Bedömningen baseras på intensitet, varaktighet och i vilken grad sinnesstämningenpåverkas av yttre omständigheter. Förhöjd sinnesstämning skattas ”0”',
    answers: [
      'Neutral stämningsläge. Kan känna såväl tillfällig munterhet som nedstämdhet, allt efter omständigheterna, utan övervikt för ena eller andra stämningsläget.',
      '1',
      'Övervägande upplevelser av nedstämdhet men ljusare stunderförekommer.',
      '3',
      'Genomgående nedstämdhet och dyster till sinnes. Sinnesstämningen påverkasföga av yttre omständigheter',
      '5',
      'Genomgående upplevelser av maximal nedstämdhet.'
    ]
  },
  {
    id: 3,
    heading: 'Ångestkänslor',
    question:
      'Avser känslor av vag psykisk olust, inre oro eller obehaglig inre spänning, ångest eller vånda, som kan stegras till det outhärdliga. Bedömningen baseras på intensitet, frekvens, duration och behov av hjälp. Särhålles från nedstämdhet(1). ',
    answers: [
      'Mestadels lugn.',
      '1',
      'Tillfälliga känslor av obehaglig psykisk spänning.',
      '3',
      'Ständig känsla av inre oro, någon gång så intensiv att den endast med viss svårighet kan bemästras.',
      '5',
      'Långdragna ångestkänslor. Överväldigande känslor av skräck eller dödsångest, som ej kan bemästras på egen hand.'
    ]
  },
  {
    id: 4,
    heading: 'Minskad nattsömn',
    question:
      'Avser uppgifter om minskad sömntid eller sömndjup i förhållande till de ordinära sömnvanorna. Ökad sömn skattas ”0” på detta item. ',
    answers: [
      'Sover som vanligt.',
      '1',
      'Måttliga insomningssvårigheter eller kortare, ytligare eller oroligare sömn än vanligt.',
      '3',
      'Minskad sömntid (minst två timmar mindre än normalt). Vaknar ofta undernatten även utan yttre störningar.',
      '5',
      'Mindre än två till tre timmars nattsömn totalt.'
    ]
  },
  {
    id: 5,
    heading: 'Minskad aptit',
    question: 'Avser upplevelser av att aptiten är sämre än normalt',
    answers: [
      'Normalt eller ökad aptit.',
      '1',
      'Dålig matlust.',
      '3',
      'Aptit saknas nästan helt, maten smakar inte, måste tvinga sig att äta.',
      '5',
      'Måste övertalas att äta något överhuvudtaget. Matvägran.'
    ]
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
