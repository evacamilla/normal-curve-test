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
    if(this.state.questionIndex === 0){
      this.setState({showInstructions: true});
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
          <div id={index} className="question-point">{index}</div>
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

            <Button text="Nästa" className="btn btn-next" onClick={this.toggleShowInstructions} />
          </div>
        ) : (

          <div className="question-wrapper">
            <div className="question">
              <h1>{this.state.questionId + ". " + this.state.heading}</h1>
              <p>{this.state.question}</p>
            </div>
            <p>Du har valt alternativ: {this.state.chosenAnswer}</p>

            <div className="question-answers" onClick={this.temporaryAnswer}>{answersDiv}</div>

            <Button text="Föregående" className="btn btn-prev" onClick={this.showPreviousQuestion}/>

            {(this.state.questionIndex <= 8) ? 
            <Button text="Nästa" className="btn btn-next" onClick={this.showNextQuestion}/>
            : 
            <Button text="Lämna in" className="btn" onClick={this.completeTest}/>
            }

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
    heading: 'Minskad aptit',
    question: '5 Avser en sänkning av det emotionella... ',
    answers: ['Svar 1', 'Svar 2', 'Svar 3', 'Svar4', 'Svar5', 'Svar6']
  },
  {
    id: 6,
    heading: 'Koncentrationssvårigheter',
    question:
      'Avser svårigheter att samla tankarna eller koncentrera sig. Bedömningen baseras på intensitet, frekvens och i vilken mån olika aktiviteter försvåras.',
    answers: ['Inga koncentrationssvårigheter', '', 'Tillfälligt svårt att hålla tankarna samlade vid t ex läsning eller TV-tittande.', '', 'Uppenbara koncentrationssvårigheter som försvårar läsning eller samtal.', '', 'Kontinuerliga, invalidiserande koncentrationssvårigheter.']
  },
  {
    id: 7,
    heading: 'Initiativlöshet',
    question: 'Avser den subjektiva upplevelsen av initiativlöshet, känslan av att behöva ett motstånd, innan en aktivitet kan påbörjas.',
    answers: ['Ingen svårighet att ta itu med nya uppgifter.', '', 'Lätta igångsättningssvårigheter', '', 'Svårt att komma igång även med enkla rutinuppgifter,som kräver stor ansträngning.', '', 'Oförmögen att ta initiativ till de enklaste aktiviteter. Kan inte påbörja någon verksamhet på egen hand.']
  },
  {
    id: 8,
    heading: 'Minskat känslomässigt engagemang',
    question: 'Avser upplevelser av minskat intresse för omvärlden eller för sådana aktiviteter som vanligen bereder nöje eller glädje. Subjektiv oförmåga att reagera känslomässigt inför människor eller företeelser i omgivningen.',
    answers: ['Normalt intresse för omvärlden och för andra människor.', '', 'Svårigheter att finna nöje i sådantsom vanligen väcker intresse. Minskad förmåga att bli arg eller irriterad.', '', 'Ointresserad av omvärlden. Upplevelser av likgiltighet inför vänner och bekanta.', '', 'Total oförmåga att känna adekvat sorg eller vrede. Totalt eller smärtsam likgiltighet och oförmåga att uppleva känslor även för närstående.']
  },
  {
    id: 9,
    heading: 'Depressivt tankeinnehåll',
    question: 'Avser självförebråelser, självanklagelser, föreställningar om synd och skuld, mindervärdighet och ekonomisk ruin.',
    answers: ['Inga pessimistiska tankar.', '', 'Fluktuerande självförebråelser och mindervärdesidéer.', '', 'Ständiga självanklagelser. Klara, men inte orimliga, tankar om synd eller skuld. Uttalat pessimistisk framtidssyn.', '', 'Absurda föreställningar om ekonomisk ruin och oförlåtliga synder. Absurda självanklagelser.']
  },
  {
    id: 10,
    heading: 'Livsleda och själmordstankar',
    question: 'Avser upplevelser av livsleda, dödsönskningar och självmordstankar samt förberedelser för självmord. Eventuella självmordsförsök påverkar ej i sig skattningen.',
    answers: ['Ordinär livslust. Inga självmordstankar.', '', 'Livsleda, men inga eller endast vaga dödsönskningar.', '', 'Självmordstankar förekommer och självmord betraktas som en tänkbarutväg, men ingen bestämd självmordsavsikt.', '', 'Uttalande avsikter att begå självmord, när tillfälle bjuds. Aktiva förberedelser för självmord.']
  }
];
export default Question;
