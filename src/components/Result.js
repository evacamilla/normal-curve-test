import React, { Component } from 'react';
import Button from './Button.js';
import ResultDiv from './ResultDiv.js';

class Result extends Component {
  state = {
    chapter: 'Resultat'
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  displayResult = () => {
    let resultDiv = [];
    let div = '';

    for(let question of this.props.allaFragor){
      div = (
        <ResultDiv chosenAnswer={question.chosenAnswer} heading={question.heading}/>
      );

      resultDiv.push(div);
    }

    return resultDiv;
  }

  render() {
    
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

                      {this.displayResult()}
                  
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

export default Result;
