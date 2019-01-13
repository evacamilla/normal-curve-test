import React, { Component, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleQuestionView from '../components/ToggleQuestionView';
import BtnSubmitTest from '../components/BtnSubmitTest';
import Video from '../components/Video';
import AnswerAlternativeListItem from '../components/AnswerAlternativeListItem.js';
import { DataContext } from '../context/DataContext';

const Question = props => {
  const [form, setForm] = useState();

  const dataContext = useContext(DataContext);

  const getForm = async () => {
    const f = await dataContext.getForm(0)
    setForm(f);
  }

  useEffect(() => {
    getForm();
  }, []);

  return (
    <div className="question-wrapper">
      <div className="white-background">
        <main>

          {form && form.title}
  
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

              {props.questions.map((question, i) => {
                if (props.questionIndex == i) {
                  return (
                    <div className="accordion-full" key={i}>
                      <div onClick={props.hideQuestion}>
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
                                  temporaryAnswer={props.temporaryAnswer}
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
                    <div onClick={props.setQuestionIndex} key={i} id={i} className="accordion-small">
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
            filledInAllAnswers={props.filledInAllAnswers}
            passedTest={props.passedTest}
            sumAllAnswers={props.sumAllAnswers}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
