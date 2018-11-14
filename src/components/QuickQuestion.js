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
    chapter: 'Fyll i dina svar',
    questionIndex: null
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  setQuestion = event => {
    let i = parseInt(event.target.id);

    this.setState({ questionIndex: i });
  };

  handleIncrement() {
    this.setState((prevState, props) => ({
      questionIndex: prevState.questionIndex + 1
    }));
  }

  completeTest = () => {
    if (this.props.allAnswers.length == 10) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor är ej ifyllda');
    }
  };

  hideQuestion = () => {
    this.setState({questionIndex: null});
  }

  temporaryAnswer = event => {
    //Store chosen answer(event.target.id) in an allaFragor.chosenAnswer in App.js state using question index as key value
    this.props.allaFragor[this.state.questionIndex].chosenAnswer =
      event.target.id;
      
    this.props.allAnswers[this.state.questionIndex] = event.target.id;

    if(this.props.allAnswers.length >= 10){
      this.props.setFilledInAllAnswers();
    }
    else if (this.props.filledInAllAnswers || this.state.questionIndex == 10) {
      null;
    } else {
      this.handleIncrement();
    }
  };

  toggleView = event => {
    this.setState({ detailedView: !this.state.detailedView });
  };

  displayPagination = () => {
    let paginationUl = [];
    let number = 1;
    let underline = '';

    for (let i = 0; i <= 9; i++) {
      let li = '';

      if (i == this.state.questionIndex) {
        underline = 'underline';
      } else {
        underline = '';
      }
      li = (
        <PaginationListItem
          key={i}
          counter={i}
          setQuestion={this.setQuestion}
          number={number}
          underline={underline}
        />
      );

      number++;
      paginationUl.push(li);
    }
    return paginationUl;
  };

  render() {
    let optionItems = [];
    for (let i=0; i<=6; i++){
      optionItems.push(<option id={i}>{i}</option>);
    }

    return (
      <div className="question-wrapper">
        <div className="white-background">
          <Link
            to="/fyllidinasvar"
          >
          <ToggleQuestionView
            toggleBooleon={false}
          />
          </Link>

          <main>
            <form>
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

        <ul className="pagination-wrapper">{this.displayPagination()}</ul>

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
