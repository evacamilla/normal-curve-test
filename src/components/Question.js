import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import DisplayAllQuickQuestion from './DisplayAllQuickQuestion';
import PaginationListItem from './PaginationListItem.js';
import OneQuestion from './OneQuestion';
import AnswerAlternative from './AnswerAlternative';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionIndex: 0,
    totalPoints: 0,
    detailedView: true,
    animateToggle: ''
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  setQuestion = event => {
    let i = event.target.id;

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
    let animateToggle = '';
    this.state.detailedView
      ? (animateToggle = '')
      : (animateToggle = 'animate-toggle');

      let number = 1;
      let className1 = '';

    return (
      <div className="question-wrapper">
        <div className="white-background">
          <div onClick={this.toggleView} className="toggle-div">
            <div className="toggle-background">
              <div className={'toggle-circle ' + animateToggle} />
            </div>
          </div>

          <main>
            {this.state.detailedView ? (
              <div>
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
                    {this.props.allaFragor[this.state.questionIndex].answers.map((answer, i) => {
                      return <AnswerAlternative
                      key={i}
                      index={i}
                      temporaryAnswer={this.temporaryAnswer}
                      answer={answer}
                    />;
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              // if detailedView == false show "quick view"

              this.props.allaFragor.map((question, i) => {
                return <DisplayAllQuickQuestion
                  key={i}
                  heading={question.heading}
                  temporaryAnswer={this.temporaryAnswer}
                  counter={i}
              />;
              })
            )}
          </main>
        </div>

        <ul className="pagination-wrapper">{this.displayPagination()}</ul>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <Link to="/sefilmen">Tillbaka</Link>
          </div>

          <div className="btn-next-div">
            <Button
              text="Lämna in"
              className="btn"
              onClick={this.completeTest}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
