import React from 'react';

function AnswerAlternative(props) {
  return (
    <li
      className="question-point-li"
      id={props.id}
      onClick={props.temporaryAnswer}
    >
      <div id={props.id} className="question-point">
        {props.id}
      </div>
      <div id={props.id} className="question-answers-text">
        <p id={props.id}>{props.answer}</p>
      </div>
    </li>
  );
}

export default AnswerAlternative;
