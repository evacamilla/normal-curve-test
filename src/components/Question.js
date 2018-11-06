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

  showNextQuestion = () => {
    let i = this.state.questionIndex + 1;
    if (i <= 9) {
      this.setState({ questionId: this.props.allaFragor[i].id });
      this.setState({ heading: this.props.allaFragor[i].heading });
      this.setState({ question: this.props.allaFragor[i].question });
      this.setState({ answers: this.props.allaFragor[i].answers });
      this.setState({ questionIndex: this.state.questionIndex + 1 });
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
    //ska sättas till 10
    if (this.props.allAnswers.length >= 1) {
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

  setQuestion = event => {
    let i = event.target.id;
    console.log(event.target);

    this.setState({ questionId: this.props.allaFragor[i].id });
    this.setState({ heading: this.props.allaFragor[i].heading });
    this.setState({ question: this.props.allaFragor[i].question });
    this.setState({ answers: this.props.allaFragor[i].answers });
    this.setState({ questionIndex: this.state.questionIndex + 1 });
  };

  render() {
    console.log(this.props.allaFragor);

    let animateToggle = '';
    this.state.detailedView
      ? (animateToggle = '')
      : (animateToggle = 'animate-toggle');

    //question loop
    let answersUl = [];
    let index = 0;

    //gör om till map?
<<<<<<< HEAD
    for (let answer of answers) {
      li = (
        <li
          className="question-point-li"
          key={index}
          id={index}
          onClick={this.temporaryAnswer}
        >
=======
    for(let answer of this.state.answers) {
      let li = (
        <li className="question-point-li" key={index} id={index} onClick={this.temporaryAnswer}>
>>>>>>> 96ea5fc7b08ae2a8f3bb3d4e261be1b0bea986f9
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

    
    //quick view selects:)
    let selectAnswersUl = [];

<<<<<<< HEAD
    for (let i = 0; i <= 9; i++) {
      select = (
        <select
          className="question-point-li"
          key={i}
          id={i}
          onClick={this.temporaryAnswer}
        >
=======
    //TODO: måste göra så att man ej kan välja första option alltså rubriken!
    //options med id ska loopas ut, hur göra med rubriken som första?
    for(let i = 0; i <= 9; i++) {
      let select = (
        <select className="question-point-li" key={i} id={i} onClick={this.temporaryAnswer}>
>>>>>>> 96ea5fc7b08ae2a8f3bb3d4e261be1b0bea986f9
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

    //pagination loop
    let paginationUl = [];
    let number = 1;
    let setUnderline = '';

<<<<<<< HEAD
    for (let i = 0; i <= 9; i++) {
      li = (
=======
    for(let i = 0; i <= 9; i++){
    let li = (
>>>>>>> 96ea5fc7b08ae2a8f3bb3d4e261be1b0bea986f9
        <li key={i} id={i} onClick={this.setQuestion}>
          <div id={i} className="number-div">
            {number}
          </div>
        </li>
      );
      number++;
      paginationUl.push(li);
    }

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
                  <ul>{answersUl}</ul>
                </div>
              </div>
<<<<<<< HEAD
            ) : (
              <div>{selectAnswersUl}</div>
=======
            ) : (// if detailedView == false show "quick view"

              <div>
                {selectAnswersUl}
              </div>
>>>>>>> 96ea5fc7b08ae2a8f3bb3d4e261be1b0bea986f9
            )}
          </main>
        </div>

        <ul className="pagination-wrapper">
          {paginationUl}
          <hr className="underline" />
        </ul>

        <div className="btn-wrapper">
          {this.state.questionIndex == 0 ? (
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