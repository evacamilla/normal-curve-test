import React, { Component } from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar',
    questionIndex: 0,
    totalPoints: 0,
    detailedView: true,
    animateToggle: ''
  };

  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter)
  };

  setQuestion = event => {
    let i = event.target.id;

    this.setState({ questionIndex: i});
  };

  handleIncrement () {
    this.setState((prevState,props) => ({
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
    console.log(this.state.oneQuestion);
  };

  //question loop
  displayOneQuestion = () => {
    console.log('dispayone' + this.state.oneQuestion);
    let answersUl = [];
    let index = 0;
    let answers = this.props.allaFragor[this.state.questionIndex].answers;
    
    //gör om till map?
    for (let answer of answers) {
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
                  <h1>
                    {this.props.allaFragor[this.state.questionIndex].id + '. ' + 
                    this.props.allaFragor[this.state.questionIndex].heading}
                  </h1>

                  <p>{this.props.allaFragor[this.state.questionIndex].question}</p>
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
