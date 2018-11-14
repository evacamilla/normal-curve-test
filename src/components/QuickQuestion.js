import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import DisplayAllQuickQuestion from './DisplayAllQuickQuestion';
import PaginationListItem from './PaginationListItem.js';
import QuestionAccordion from './QuestionAccordion';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';

class QuickQuestion extends Component {
  state = {
    questionIndex: null
  };

  setQuestion = event => {
    let i = parseInt(event.target.id);

    this.setState({ questionIndex: i });
    console.log(this.state.questionIndex);
  };

  completeTest = () => {
    if (this.props.allAnswers.length == 10) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor är ej ifyllda');
    }
  };

  temporaryAnswerQuick = event => {
    //Store chosen answer(event.target.id) in an allaFragor.chosenAnswer in App.js state using question index as key value
    this.props.allaFragor[this.state.questionIndex].chosenAnswer =
      event.target.value;
      
    this.props.allAnswers[this.state.questionIndex] = event.target.value;

    if(this.props.allAnswers.length >= 10){
      this.props.setFilledInAllAnswers();
    }
  };

  handleChange = event => {
    console.log(event.target.value);
  }

  render() {
    let optionItems = [];
    for (let i=0; i<=6; i++){
      optionItems.push(<option value={i}>{i}</option>);
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
                    <div>
                      <select
                        key={i}
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
