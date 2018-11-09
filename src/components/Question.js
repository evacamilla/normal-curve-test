import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import DisplayAllQuickQuestion from './DisplayAllQuickQuestion';
import PaginationListItem from './PaginationListItem.js';
import QuestionAccordion from './QuestionAccordion';
import OneQuestion from './OneQuestion';
import AnswerAlternative from './AnswerAlternative';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionIndex: 0,
    totalPoints: 0,
    detailedView: true
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  setQuestion = event => {
    console.log(event.target.id);
    let i = parseInt(event.target.id);
    console.log(i);
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

  temporaryAnswer = event => {
    console.log(
      'From func temporaryAnswer. questionIndex is ' + this.state.questionIndex
    );
    console.log(event.target.id);
    //Store chosen answer(event.target.id) in an allaFragor.chosenAnswer in App.js state using question index as key value
    this.props.allaFragor[this.state.questionIndex].chosenAnswer =
      event.target.id;
    //old solution storing chosen answer
    this.props.allAnswers[this.state.questionIndex] = event.target.id;

    //set state for the next question
    this.handleIncrement();

    //fäll ut nästa fråga i accordion här
  };

  toggleView = event => {
    this.setState({ detailedView: !this.state.detailedView });
  };

  displayPagination = () => {
    let paginationUl = [];
    let number = 1;
    let className1 = '';

    for (let i = 0; i <= 9; i++) {
      let li = '';

      if (i == this.state.questionIndex) {
        className1 = 'underline2';
      } else {
        className1 = '';
      }
      li = (
        <PaginationListItem
          key={i}
          counter={i}
          setQuestion={this.setQuestion}
          number={number}
          className={className1}
        />
      );

      number++;
      paginationUl.push(li);
    }
    return paginationUl;
  };

  render() {
    {
      console.log(
        'Render questionIndex from Question.js ' + this.state.questionIndex
      );
    }
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
                  return (
                  <QuestionAccordion id={question.id} heading={question.heading} key={i}/>
                  );
                })}

                <OneQuestion
                  id={this.props.allaFragor[this.state.questionIndex].id}
                  heading={
                    this.props.allaFragor[this.state.questionIndex].heading
                  }
                  question={
                    this.props.allaFragor[this.state.questionIndex].question
                  }
                />

                <div className="question-answers">
                  <ul>
                    {this.props.allaFragor[
                      this.state.questionIndex
                    ].answers.map((answer, i) => {
                      return (
                        <AnswerAlternative
                          key={i}
                          index={i}
                          temporaryAnswer={this.temporaryAnswer}
                          answer={answer}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              // if detailedView == false show "quick view"

              this.props.allaFragor.map((question, i) => {
                return (
                  <DisplayAllQuickQuestion
                    key={i}
                    heading={question.heading}
                    temporaryAnswer={this.temporaryAnswer}
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
          />
          {/* <div className="btn-next-div">
            <Button
              text="Lämna in"
              className="btn"
              onClick={this.completeTest}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Question;
