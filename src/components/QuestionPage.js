import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaginationListItem from './PaginationListItem.js';
import QuestionAccordion from './QuestionAccordion';
import ToggleQuestionView from './ToggleQuestionView';
import BtnSubmitTest from './BtnSubmitTest';
import AnswerAlternativeListItem from './AnswerAlternativeListItem.js';

class Question extends Component {
  state = {
    chapter: 'Fyll i dina svar'
  };
  
  componentDidMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  completeTest = () => {
    if (this.props.allAnswers.length == 10) {
      this.props.sumAllAnswers();
    } else {
      console.log('Alla frågor är ej ifyllda');
    }
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
          <Link
            to="/fyllidinasvarsnabb"
          >
          <ToggleQuestionView
            toggleBooleon={true}
          />
          </Link>

          <main>
              <div>
              {this.props.allaFragor.map((question, i) => {
                if(this.props.questionIndex == i ){
                  return (  
                    <div className="accordion">
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
                    <div onClick={this.props.setQuestion} id={i} className="accordion">
                      <h1 id={i}>{question.number + ". " + question.heading}</h1>
                    </div>
                  );
                }
                





                  // return(  
                  //   <QuestionAccordion hideQuestion={this.hideQuestion} temporaryAnswer={this.temporaryAnswer} allaFragor={this.props.allaFragor} chosenAnswer={question.chosenAnswer} questionIndex={this.state.questionIndex} handleClick={this.setQuestion} id={i} number={question.number} heading={question.heading} question={question.question} key={i}
                  //   />
                  // );
              })} 

              </div>
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
