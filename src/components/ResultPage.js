import React, { Component } from 'react';
import Button from './Button.js';
import ResultAccordion from './ResultAccordion.js';

class ResultPage extends Component {
  state = {
    chapter: 'Resultat',
    questionIndex: 0
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  setQuestion = event => {
    let i = parseInt(event.target.id);
    console.log(i);

    this.setState({ questionIndex: i });
  };

  render() {
    console.log(this.props.allaFragor);
    return (
      <div className="result-wrapper">
        <div className="white-background">
          <main>
            {this.props.filledInAllAnswers ? (
              //if user filled out all the answers

              <div>
                {this.props.totalPoints}
                {this.props.passedTest ? (
                  //if user did pass the test
                  <div>

                      <h1>Du är godkänd!</h1>
                      <div className="graph-div">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Standard_deviation_diagram.svg/400px-Standard_deviation_diagram.svg.png"
                          alt="ditt resultat visat i en normalfördelningskurva"
                        />
                        <p>Ovan ser du dina resultat jämfört med normalvärdet av vad andra skattat.</p>
                      </div>

                      <p>För att bli godkäns krävs att du har en diff på mindre eller lika med 2 mer eller mindre än normalvärdet.</p>

                      <h2>Jämför dina resultat</h2>
                      {
                        this.props.allaFragor.map((question, i) => {
                          return <ResultAccordion allaFragor={this.props.allaFragor} chosenAnswer={question.chosenAnswer} questionIndex={this.state.questionIndex} key={i} i={i} setQuestion={this.setQuestion} question={question.question} number={question.number} heading={question.heading}/>;
                        })
                      }
                  </div>
                ) : (
                  //if user did not pass
                  //ska vara switch-länk till /introduktion ist för button?
                  <div>
                    <p>Du är inte godkänd</p>
                    <Button
                      text={'Gör om kursen'}
                      onClick={this.answersOverview}
                      className={'big-btn'}
                    />
                  </div>
                )}
              </div>
            ) : (
              //if user didnt fill out all the answers(came in to page with URL, deny access?)
              //ska vara switch-länk till /introduktion ist för button?
              <div>
                Du måste göra klart kursen för att kunna se dina resultat
                <Button
                  text={'Gå till kursen'}
                  onClick={this.answersOverview}
                  className={'big-btn'}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default ResultPage;
