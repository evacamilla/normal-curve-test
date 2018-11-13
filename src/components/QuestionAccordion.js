import React from 'react';
import AnswerAlternativeListItem from './AnswerAlternativeListItem.js';

function QuestionAccordion(props) {
  if(props.questionIndex == props.id ){
    return (  
      <div className="accordion">
      <div onClick={props.hideQuestion}>
        <h1 id={props.id}>{props.number + ". " + props.heading}</h1>
      </div>

        <div className="one-question">
          <p>
            {props.question}
          </p>
        <div className="question-answers">
          <ul>
            {props.allaFragor[
              props.questionIndex
            ].answers.map((answer, i) => {
              let specialClassName = '';
              if(props.chosenAnswer == i){
                  specialClassName = 'chosen';
              } else if(props.normalAnswer == i) {
                      specialClassName = 'normal';
              }
                  return (
                      <AnswerAlternativeListItem
                      key={i}
                      id={i}
                      answer={answer}
                      temporaryAnswer={props.temporaryAnswer}
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
      <div onClick={props.handleClick} id={props.id} className="accordion">
        <h1 id={props.id}>{props.number + ". " + props.heading}</h1>
      </div>
    );
  }
  

}

export default QuestionAccordion;