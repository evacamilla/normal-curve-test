import React, { Component } from 'react';
import Button from './Button.js';

class Result extends Component {
  state = {
    chapter: 'Resultat',
    result: 0
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  answersOverview = () => {
    console.log('answers overview');
  };

  render() {
    return (
      <main>
        {this.props.filledInAllAnswers ? (
          //if user filled out all the answers

          <div>
            {this.props.totalPoints}
            {this.props.passedTest ? (
              //if user did pass the test
              <div>
                <p>Du är godkänd</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Standard_deviation_diagram.svg/400px-Standard_deviation_diagram.svg.png"
                  alt="ditt resultat visat i en normalfördelningskurva"
                />
                <Button
                  text={'Se överblick'}
                  onClick={this.answersOverview}
                  className={'big-btn'}
                />
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
    );
  }
}

export default Result;
