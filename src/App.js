import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header.js';
import IntroductionPage from './pages/IntroductionPage.js';
import QuestionPage from './pages/QuestionPage.js';
import QuickQuestionsPage from './pages/QuickQuestionsPage.js';
import ResultPage from './pages/ResultPage.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    filledInAllAnswers: true,
    passedTest: true,
    allAnswers: [],
    totalPoints: 0,
    questions: questions,
    questionIndex: null
  };


  setQuestionIndex = event => {
    let i = parseInt(event.target.id);

    this.setState({ questionIndex: i });
  };

  hideQuestion = () => {
    this.setState({ questionIndex: null });
  }

  temporaryAnswer = event => {
    this.state.questions[this.state.questionIndex].chosenAnswer =
      event.target.id;

    this.state.allAnswers[this.state.questionIndex] = event.target.id;

    if (this.state.allAnswers.length >= 10) {
      this.setFilledInAllAnswers();
    }
    this.handleIncrement();
  };

  handleIncrement() {
    this.setState((prevState, props) => ({
      questionIndex: prevState.questionIndex + 1
    }));
  }

  sumAllAnswers = () => {
    let sum = 0;

    this.state.allAnswers.forEach(function (answer) {
      answer = parseInt(answer, 10);
      sum += answer;
    });

    this.setState({ totalPoints: sum });

    //användaren har tryckt på lämna in svar och totalpoängen har beräknats
    //då ska användaren skickas till resultatsidan, Redirect?
  };

  setFilledInAllAnswers = () => {
    this.setState({ filledInAllAnswers: true });
  }

  completeTest = () => {
    if (this.props.allAnswers.length === 10) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor är ej ifyllda');
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <IntroductionPage />
              )}
            />
            <Route
              exact
              path="/introduktion"
              component={props => (
                <IntroductionPage />
              )}
            />
            <Route
              exact
              path="/fyllidinasvar"
              component={props => (
                <QuestionPage
                  {...props}
                  {...this}
                  {...this.state}
                />
              )}
            />
            <Route
              exact
              path="/fyllidinasvarsnabb"
              component={props => (
                <QuickQuestionsPage
                  {...this}
                  {...this.state}
                />
              )}
            />
            <Route
              exact
              path="/resultat"
              component={props => (
                <ResultPage
                  {...props}
                  {...this}
                  {...this.state}
                  changeChapter={this.changeChapter}
                />
              )}
            />
        </Switch>
      </div>
    );
  }
}

let questions = [
  {
    number: 1,
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
    number: 2,
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
    number: 3,
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
    number: 4,
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
    number: 5,
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
    number: 6,
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
    number: 7,
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
    number: 8,
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
    number: 9,
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
    number: 10,
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

export default App;
