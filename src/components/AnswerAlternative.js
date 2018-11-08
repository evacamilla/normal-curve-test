import React from 'react';

function AnswerAlternative(props) {
  return (
    <li
      className="question-point-li"
      id={props.index}
      onClick={props.temporaryAnswer}
    >
      <div id={props.index} className="question-point">
        {props.index}
      </div>
      <div id={props.index} className="question-answers-text">
        <p id={props.index}>{props.answer}</p>
      </div>
    </li>
  );
}

export default AnswerAlternative;
