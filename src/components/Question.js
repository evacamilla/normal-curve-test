import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionId: allaFragor[0].id,
    heading: allaFragor[0].heading,
    question: allaFragor[0].question,
    answers: allaFragor[0].answers,
    questionIndex: 0,
    totalPoints: 0
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
    }
  };

  completeTest = () => {
    //ska sättas till 10
    if (this.props.allAnswers.length >= 1) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor äe ej ifyllda');
    }
  };

  temporaryAnswer = event => {
    this.props.allAnswers[this.state.questionIndex] = event.target.id;
    allaFragor[this.state.questionIndex].chosenAnswer = event.target.id;
    console.log(this.props.allAnswers[this.state.questionIndex]);
    this.showNextQuestion();
  };

  render() {
    //question loop
    let answers = this.state.answers;
    let answersUl = [];
    let li = '';
    let index = 0;

    //gör om till map?
    for(let answer of answers) {
      li = (
        <li className="question-point-li" key={index} id={index} onClick={this.temporaryAnswer}>
          <div id={index} className="question-point">
            {index}
          </div>
          <div id={index} className="question-answers-text">
          <p>
              {answer}
          </p>
          </div>
        </li>
      );
      answersUl.push(li);
      index += 1;
    }


    //pagination loop
    let paginationUl = [];
    let li2 = '';
    let number = 1;
    let index2 = 0;
    let setUnderline = "";

    for(let i = 0; i <= 9; i++){
    li = (
        <li>
          <div key={i} className="number-div">
            {number}
          </div>
        </li>
    );
      number ++;
      paginationUl.push(li);
    }
  

    return (
          <div className="question-wrapper">
          <div className="white-background">
            <main>

              <div className="question">
                <h1>{this.state.questionId + '. ' + this.state.heading}</h1>
                <p>{this.state.question}</p>
              </div>

              <div className="question-answers">
                <ul>
                  {answersUl}
                </ul>
              </div>
            </main>
          </div>

            <ul className="pagination-wrapper">
              {paginationUl}
              <div className="underline-div"></div>
            </ul>

            <div className="btn-wrapper">
            {this.state.questionIndex == 0 ? (
                <div className="btn-prev-div">
                  <Link to="/sefilmen">
                    Tillbaka
                  </Link>
                </div>
              ) : (
              <div className="btn-prev-div">
                <Button
                  text="Tillbaka"
                  className="btn btn-prev"
                  onClick={this.showPreviousQuestion}
                />
              </div>
              )}

              {this.state.questionIndex <= 8 ? (
                <div className="btn-next-div">
                  <Button
                    text="Nästa"
                    className="btn btn-next"
                    onClick={this.showNextQuestion}
                  />
                </div>
              ) : (
                <div className="btn-next-div">
                  <Button
                    text="Lämna in"
                    className="btn"
                    onClick={this.completeTest}
                  />
                </div>
              )}
            </div>
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
      '',
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
      '',
      'Övervägande upplevelser av nedstämdhet men ljusare stunderförekommer.',
      '',
      'Genomgående nedstämdhet och dyster till sinnes. Sinnesstämningen påverkasföga av yttre omständigheter',
      '',
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
      '',
      'Tillfälliga känslor av obehaglig psykisk spänning.',
      '',
      'Ständig känsla av inre oro, någon gång så intensiv att den endast med viss svårighet kan bemästras.',
      '',
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
      '',
      'Måttliga insomningssvårigheter eller kortare, ytligare eller oroligare sömn än vanligt.',
      '',
      'Minskad sömntid (minst två timmar mindre än normalt). Vaknar ofta undernatten även utan yttre störningar.',
      '',
      'Mindre än två till tre timmars nattsömn totalt.'
    ]
  },
  {
    id: 5,
    heading: 'Minskad aptit',
    question: 'Avser upplevelser av att aptiten är sämre än normalt',
    answers: [
      'Normalt eller ökad aptit.',
      '',
      'Dålig matlust.',
      '',
      'Aptit saknas nästan helt, maten smakar inte, måste tvinga sig att äta.',
      '',
      'Måste övertalas att äta något överhuvudtaget. Matvägran.'
    ]
  },
  {
    id: 6,
    heading: 'Koncentrationssvårigheter',
    question:
      'Avser svårigheter att samla tankarna eller koncentrera sig. Bedömningen baseras på intensitet, frekvens och i vilken mån olika aktiviteter försvåras.',
    answers: [
      'Inga koncentrationssvårigheter',
      '',
      'Tillfälligt svårt att hålla tankarna samlade vid t ex läsning eller TV-tittande.',
      '',
      'Uppenbara koncentrationssvårigheter som försvårar läsning eller samtal.',
      '',
      'Kontinuerliga, invalidiserande koncentrationssvårigheter.'
    ]
  },
  {
    id: 7,
    heading: 'Initiativlöshet',
    question:
      'Avser den subjektiva upplevelsen av initiativlöshet, känslan av att behöva ett motstånd, innan en aktivitet kan påbörjas.',
    answers: [
      'Ingen svårighet att ta itu med nya uppgifter.',
      '',
      'Lätta igångsättningssvårigheter',
      '',
      'Svårt att komma igång även med enkla rutinuppgifter,som kräver stor ansträngning.',
      '',
      'Oförmögen att ta initiativ till de enklaste aktiviteter. Kan inte påbörja någon verksamhet på egen hand.'
    ]
  },
  {
    id: 8,
    heading: 'Minskat känslomässigt engagemang',
    question:
      'Avser upplevelser av minskat intresse för omvärlden eller för sådana aktiviteter som vanligen bereder nöje eller glädje. Subjektiv oförmåga att reagera känslomässigt inför människor eller företeelser i omgivningen.',
    answers: [
      'Normalt intresse för omvärlden och för andra människor.',
      '',
      'Svårigheter att finna nöje i sådantsom vanligen väcker intresse. Minskad förmåga att bli arg eller irriterad.',
      '',
      'Ointresserad av omvärlden. Upplevelser av likgiltighet inför vänner och bekanta.',
      '',
      'Total oförmåga att känna adekvat sorg eller vrede. Totalt eller smärtsam likgiltighet och oförmåga att uppleva känslor även för närstående.'
    ]
  },
  {
    id: 9,
    heading: 'Depressivt tankeinnehåll',
    question:
      'Avser självförebråelser, självanklagelser, föreställningar om synd och skuld, mindervärdighet och ekonomisk ruin.',
    answers: [
      'Inga pessimistiska tankar.',
      '',
      'Fluktuerande självförebråelser och mindervärdesidéer.',
      '',
      'Ständiga självanklagelser. Klara, men inte orimliga, tankar om synd eller skuld. Uttalat pessimistisk framtidssyn.',
      '',
      'Absurda föreställningar om ekonomisk ruin och oförlåtliga synder. Absurda självanklagelser.'
    ]
  },
  {
    id: 10,
    heading: 'Livsleda och själmordstankar',
    question:
      'Avser upplevelser av livsleda, dödsönskningar och självmordstankar samt förberedelser för självmord. Eventuella självmordsförsök påverkar ej i sig skattningen.',
    answers: [
      'Ordinär livslust. Inga självmordstankar.',
      '',
      'Livsleda, men inga eller endast vaga dödsönskningar.',
      '',
      'Självmordstankar förekommer och självmord betraktas som en tänkbarutväg, men ingen bestämd självmordsavsikt.',
      '',
      'Uttalande avsikter att begå självmord, när tillfälle bjuds. Aktiva förberedelser för självmord.'
    ]
  }
];
export default Question;
