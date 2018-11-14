import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';

class QuickQuestion extends Component {
  state = {
    questionIndex: null
  };

  completeTest = () => {
    if (this.props.allAnswers.length === 10) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor är ej ifyllda');
    }
  };

  temporaryAnswerQuick = event => {
    //Store chosen answer(event.target.id) in an allaFragor.chosenAnswer in App.js state using question index as key value
    this.props.allaFragor[this.state.questionIndex].chosenAnswer =
      event.target.value;
      //
    //this.props.allAnswers[this.state.questionIndex] = event.target.value;

    if(this.props.allAnswers.length >= 10){
      this.props.setFilledInAllAnswers();
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
          <Link
            to="/fyllidinasvar"
          >
          <ToggleQuestionView
            toggleBooleon={false}
          />
          </Link>

          <main>
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
          </main>
        </div>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <Link to="/sefilmen">Tillbaka</Link>
          </div>

          <BtnSubmitTest
            filledInAllAnswers={this.props.filledInAllAnswers}
            passedTest={this.props.passedTest}
            sumAllAnswers={this.props.sumAllAnswers}
          />
        </div>
      </div>
    );
  }
}

export default QuickQuestion;
