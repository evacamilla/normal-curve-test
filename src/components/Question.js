import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionId: this.props.allaFragor[0].id,
    heading: this.props.allaFragor[0].heading,
    question: this.props.allaFragor[0].question,
    answers: this.props.allaFragor[0].answers,
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

    this.setState({ questionIndex: i});
    this.setState({ questionId: this.props.allaFragor[i].id });
    this.setState({ heading: this.props.allaFragor[i].heading });
    this.setState({ question: this.props.allaFragor[i].question });
    this.setState({ answers: this.props.allaFragor[i].answers });
  };

  showNextQuestion = () => {
    let i = parseInt(this.state.questionIndex) + 1;

    if (i <= 9) {
      this.setState({ questionId: this.props.allaFragor[i].id });
      this.setState({ heading: this.props.allaFragor[i].heading });
      this.setState({ question: this.props.allaFragor[i].question });
      this.setState({ answers: this.props.allaFragor[i].answers });
      this.setState({ questionIndex: i + 1 });
    }
  };

  showPreviousQuestion = () => {
    if (this.state.questionIndex === 0) {
      this.setState({ showInstructions: true });
    } else {
      let i = this.state.questionIndex - 1;
      this.setState({ questionId: this.props.allaFragor[i].id });
      this.setState({ heading: this.props.allaFragor[i].heading });
      this.setState({ question: this.props.allaFragor[i].question });
      this.setState({ answers: this.props.allaFragor[i].answers });
      this.setState({ questionIndex: this.state.questionIndex - 1 });
    }
  };

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
    this.showNextQuestion();
  };

  toggleView = event => {
    this.setState({ detailedView: !this.state.detailedView });
  };

  //question loop
  displayOneQuestion = () => {
    let answersUl = [];
    let index = 0;

    //gör om till map?
    for (let answer of this.state.answers) {
      let li = (
        <li
          className="question-point-li"
          key={index}
          id={index}
          onClick={this.temporaryAnswer}
        >
          <div id={index} className="question-point">
            {index}
          </div>
          <div id={index} className="question-answers-text">
            <p id={index}>{answer}</p>
          </div>
        </li>
      );
      answersUl.push(li);
      index += 1;
    }
    return answersUl;
  };

  
  displayAllQuestions = () => {
    let selectAnswersUl = [];

    //TODO: måste göra så att man ej kan välja första option alltså rubriken!
    //options med id ska loopas ut, hur göra med rubriken som första?
    for (let i = 0; i <= 9; i++) {
      let select = (
        <select
          className="question-point-li"
          key={i}
          id={i}
          onClick={this.temporaryAnswer}
        >
          <option>{this.props.allaFragor[i].heading}</option>
          <option id="0">0</option>
          <option id="1">1</option>
          <option id="2">2</option>
          <option id="3">3</option>
          <option id="4">4</option>
          <option id="5">5</option>
          <option id="6">6</option>
        </select>
      );
      selectAnswersUl.push(select);
    }
    
    return selectAnswersUl;
  }

  myFunction = () => {
    let paginationUl = [];
    let number = 1;
    let setUnderline = '';

    for (let i = 0; i <= 9; i++) {
      let li = '';

      if (i == this.state.questionIndex) {
        li = (
          <div className="underline2">
            <li key={i} id={i} onClick={this.setQuestion}>
              <div id={i} className="number-div">
                {number}
              </div>
            </li>
          </div>
        );
      } else {
        li = (
          <div>
            <li key={i} id={i} onClick={this.setQuestion}>
              <div id={i} className="number-div">
                {number}
              </div>
            </li>
          </div>
        );
      }

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
                <div className="question">
                  <h1>{this.state.questionId + '. ' + this.state.heading}</h1>
                  <p>{this.state.question}</p>
                </div>

                <div className="question-answers">
                  <ul>{this.displayOneQuestion()}</ul>
                </div>
              </div>
            ) : (
              // if detailedView == false show "quick view"
              <div>{this.displayAllQuestions()}</div>
            )}
          </main>
        </div>

        <ul className="pagination-wrapper">{this.myFunction()}</ul>

        <div className="btn-wrapper">
          {this.state.questionIndex === 0 ? (
            <div className="btn-prev-div">
              <Link to="/sefilmen">Tillbaka</Link>
            </div>
          ) : (
            <div className="btn-prev-div">
              <Button
                text="Tillbaka"
                className="btn btn-prev"
                onClick={this.showPreviousQuestion}
              />
            </div>
          )}

          {this.state.questionIndex <= 8 ? (
            <div className="btn-next-div">
              <Button
                text="Nästa"
                className="btn btn-next"
                onClick={this.showNextQuestion}
              />
            </div>
          ) : (
            <div className="btn-next-div">
              <Button
                text="Lämna in"
                className="btn"
                onClick={this.completeTest}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Question;
