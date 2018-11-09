import React from 'react';
import AnswerAlternative from './AnswerAlternative.js';

function QuestionAccordion(props) {
  if(props.questionIndex == props.id ){
    return (  
      <div onClick={props.handleClick} id={props.id} className="accordion">
        <h1 id={props.id}>{props.number + " " + props.heading}</h1>
        <div className="one-question">
          <p>
            {props.question}
          </p>
        </div>

        <div className="question-answers">
          <ul>
            {props.allaFragor[
              props.questionIndex
            ].answers.map((answer, i) => {
              return (
                <AnswerAlternative
                  key={i}
                  index={i}
                  temporaryAnswer={props.temporaryAnswer}
                  answer={answer}
                />
              );
            })}
          </ul>
          </div>
      </div>
  );
  } else {
    return (  
      <div onClick={props.handleClick} id={props.id} className="accordion">
        <h1 id={props.id}>{props.number + " " + props.heading}</h1>
      </div>
    );
  }
  

}

export default QuestionAccordion;