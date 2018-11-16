import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaginationListItem from './PaginationListItem.js';
import QuestionAccordion from './QuestionAccordion';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';
import Video from './Video';
import AnswerAlternativeListItem from './AnswerAlternativeListItem.js';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar'
  };
  
  componentDidMount = () => {
    // this.props.changeChapter(this.state.chapter);
    window.addEventListener('onclick', this.handleResize);
  };

  displayPagination = () => {
    let paginationUl = [];
    let number = 1;
    let underline = '';

    for (let i = 0; i <= 9; i++) {
      let li = '';

      if (i == this.props.questionIndex) {
        underline = 'underline';
      } else {
        underline = '';
      }
      li = (
        <PaginationListItem
          key={i}
          counter={i}
          setQuestion={this.props.setQuestion}
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
          <main>

              <div className="flex-wrapper">
                <Video />
                
              <div className="test">

              <div className="toggle-flex">
                <div className="toggle-link-wrapper">
                  <Link
                    to="/fyllidinasvarsnabb"
                  >
                  <ToggleQuestionView
                    toggleBooleon={true}
                  />
                  </Link>
                  </div>
                </div>

                  {this.props.allaFragor.map((question, i) => {
                    if(this.props.questionIndex == i ){
                      return (  
                        <div className="accordion" key={i}>
                          <div onClick={this.props.hideQuestion}>
                            <h1 id={i}>{question.number + ". " + question.heading}</h1>
                          </div>
                    
                          <div className="one-question">
                            <p>
                              {question.question}
                            </p>
                          <div className="question-answers">
                            <ul>
                              {question.answers.map((answer, i) => {
                                let specialClassName = '';
                                if(question.chosenAnswer == i){
                                    specialClassName = 'chosen';
                                } else if(question.normalAnswer == i) {
                                        specialClassName = 'normal';
                                }
                                    return (
                                        <AnswerAlternativeListItem
                                        key={i}
                                        id={i}
                                        answer={answer}
                                        temporaryAnswer={this.props.temporaryAnswer}
                                        specialClassName={specialClassName}
                                        />
                                    );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                  );
                  } else {
                    return (  
                      <div onClick={this.props.setQuestion} key={i} id={i} className="accordion">
                        <h1 id={i}>{question.number + ". " + question.heading}</h1>
                      </div>
                    );
                  }
                })} 
              </div>

            </div>
          </main>
        </div>

        <ul className="pagination-wrapper">{this.displayPagination()}</ul>

        <div className="btn-wrapper">
          <div className="btn-prev-div">
            <Link to="/introduktion">Tillbaka</Link>
          </div>
            
            <div className="btn-center-wrapper">
              <BtnSubmitTest
                filledInAllAnswers={this.props.filledInAllAnswers}
                passedTest={this.props.passedTest}
                sumAllAnswers={this.props.sumAllAnswers}
              />
          </div>
          </div>
        </div>
    );
  }
}

export default Question;
