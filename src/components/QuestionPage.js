import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import DisplayAllQuickQuestion from './DisplayAllQuickQuestion';
import PaginationListItem from './PaginationListItem.js';
import QuestionAccordion from './QuestionAccordion';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionIndex: null,
    totalPoints: 0,
    detailedView: true
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

    return (
      <div className="question-wrapper">
        <div className="white-background">
          <ToggleQuestionView
            toggleView={this.toggleView}
            toggleBooleon={this.state.detailedView}
          />

          <main>
            {this.state.detailedView ? (
              <div>

              {this.props.allaFragor.map((question, i) => {
                  return(
                    <QuestionAccordion hideQuestion={this.hideQuestion} temporaryAnswer={this.temporaryAnswer} allaFragor={this.props.allaFragor} chosenAnswer={question.chosenAnswer} questionIndex={this.state.questionIndex} handleClick={this.setQuestion} id={i} number={question.number} heading={question.heading} question={question.question} key={i}
                    />
                  );
              })} 

              </div>
            ) : (
              // if detailedView == false show "quick view"

              this.props.allaFragor.map((question, i) => {
                return (
                  <DisplayAllQuickQuestion
                    key={i}
                    heading={question.heading}
                    number={question.number}
                    setQuestion={this.setQuestion}
                    counter={i}
                  />
                );
              })
            )}
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

export default Question;
