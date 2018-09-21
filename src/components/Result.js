import React, { Component } from 'react';
import Button from './Button.js';

class Result extends Component {
  state = {
    chapter: 'Resultat',
    filledInAnswers: false,
    passedTest: false
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  answersOverview = () => {
    console.log('answers overview');
  };

  render() {
    return (
      <div>
        <h1>Resultat</h1>

        {this.state.filledInAnswers ? (
          //if user filled out all the answers
          <div>
            {this.state.passedTest ? (
              //if user did pass the test
              <div>
                <p>Du är godkänd</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Standard_deviation_diagram.svg/400px-Standard_deviation_diagram.svg.png" />
                <Button
                  text={'Se överblick'}
                  onClick={this.answersOverview}
                  className={'big-btn'}
                />
              </div>
            ) : (
              //if user did not pass
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
          <div>
            Du måste göra klart kursen för att kunna se dina resultat
            <Button text={'ggew'} onClick={this.answersOverview} />
          </div>
        )}
      </div>
    );
  }
}

export default Result;
