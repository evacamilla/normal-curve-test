import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';
import Video from './Video';

class QuickQuestion extends Component {
  state = {
    questionIndex: null
  };


  setQuestion = event => {
    let i = parseInt(event.target.id);

    this.setState({ questionIndex: i });
  };

  temporaryAnswerQuick = event => {
    //Store chosen answer(event.target.id) in an allaFragor.chosenAnswer in App.js state using question index as key value
    this.props.allaFragor[this.state.questionIndex].chosenAnswer =
      event.target.value;
    //this.props.allAnswers[this.state.questionIndex] = event.target.value;

    if(this.props.allAnswers.length >= 10){
      this.setFilledInAllAnswers();
    }
  };

  render() {
    let optionItems = [];
    for (let i=0; i<=6; i++){
      optionItems.push(<option key={i} value={i}>{i}</option>);
    }

    return (
      <div className="question-wrapper">
        <div className="white-background">
        {this.state.questionIndex}

          <main>
            <div className="flex-wrapper">

              <Video />

              <div className="test">
              
              
              <div className="toggle-flex">
                <div className="toggle-link-wrapper">
                  <Link
                    to="/fyllidinasvar"
                  >
                  <ToggleQuestionView
                    toggleBooleon={false}
                  />
                  </Link>
                  </div>
                </div>

                <form onChange={this.temporaryAnswerQuick}>
                  {this.props.allaFragor.map((question, i) => {
                      return (
                        <div key={i}>
                          <select
                            id={i}
                            onClick={this.setQuestion}
                          >
                            <option value="" hidden>{question.heading}</option>
                            {optionItems}
                          </select>
                        </div>
                      );
                    })}
                  </form>
                </div>
            </div>
          </main>
        </div>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <Link to="/introduktion">Tillbaka</Link>
          </div>

          <BtnSubmitTest
            filledInAllAnswers={this.state.filledInAllAnswers}
            passedTest={this.state.passedTest}
            sumAllAnswers={this.props.sumAllAnswers}
          />
        </div>
      </div>
    );
  }
}

export default QuickQuestion;
