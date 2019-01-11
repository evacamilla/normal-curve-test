import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleQuestionView from '../components/ToggleQuestionView';
import BtnSubmitTest from '../components/BtnSubmitTest';
import Video from '../components/Video';
import AnswerAlternativeListItem from '../components/AnswerAlternativeListItem.js';

class Question extends Component {
  componentDidMount = () => {
    window.addEventListener('onclick', this.handleResize);
  };

  render() {

    return (
      <div className="question-wrapper">
        <div className="white-background">
          <main>

            <div className="flex-wrapper">
              <div className="flex-left">
                <Video />
              </div>
              <div className="flex-right">
                <div className="toggle-flex">
                  <div className="toggle-link-wrapper">
                    Förenkla vy
                    <Link
                      to="/fyllidinasvarsnabb"
                    >
                      <ToggleQuestionView
                        toggleBooleon={true}
                      />
                    </Link>
                  </div>
                </div>

                {this.props.questions.map((question, i) => {
                  if (this.props.questionIndex == i) {
                    return (
                      <div className="accordion-full" key={i}>
                        <div onClick={this.props.hideQuestion}>
                          <h1 className="accordion-heading" id={i}>{question.number + ". " + question.heading}</h1>
                          <p>
                            {question.question}
                          </p>
                        </div>

                        <div className="one-question">
                          <div className="question-answers">
                            <ul>
                              {question.answers.map((answer, i) => {
                                return (
                                  <AnswerAlternativeListItem
                                    key={i}
                                    id={i}
                                    answer={answer}
                                    temporaryAnswer={this.props.temporaryAnswer}
                                    chosen={question.chosenAnswer == i}
                                    normal={question.normalAnswer == i}
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
                      <div onClick={this.props.setQuestionIndex} key={i} id={i} className="accordion-small">
                        <h1 className="accordion-heading" id={i}>{question.number + ". " + question.heading}</h1>
                        <span className="chosen-answer">{question.chosenAnswer}</span>
                      </div>
                    );
                  }
                })}
              </div>

            </div>
          </main>
          <div className="pink-circle"></div>
        </div>

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
