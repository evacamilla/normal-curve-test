import React from 'react';
import AnswerAlternativeListItem from './AnswerAlternativeListItem.js';

function QuestionAccordion(props) {
  if(props.questionIndex == props.id ){
    return (  
      <div className="accordion">
      <div onClick={props.hideQuestion}>
        <h3 id={props.id}>{props.number + ". " + props.heading}</h3>
      </div>

        <div className="one-question">
          <p>
            {props.question}
          </p>
        <div className="question-answers">
          <ul>
            {props.questions[
              props.questionIndex
            ].answers.map((answer, i) => {
                  return (
                      <AnswerAlternativeListItem
                      key={i}
                      id={i}
                      chosen={props.chosenAnswer === i}
                      normal={props.normalAnswer === i}
                      answer={answer}
                      temporaryAnswer={props.temporaryAnswer}
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
      <div onClick={props.handleClick} id={props.id} className="accordion">
        <h3 id={props.id}>{props.number + ". " + props.heading}</h3>
      </div>
    );
  }

}

export default QuestionAccordion;