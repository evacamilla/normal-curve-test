import React from 'react';

function AnswerAlternativeListItem(props) {
  return (
    <li
      className={"answer-alternative-li " + props.specialClassName}
      id={props.id}
      onClick={props.temporaryAnswer}
    >
      <div id={props.id} className="answer-alternative-circle">
        {props.id}
      </div>
      <div id={props.id} className="answer-alternative-text">
        <p id={props.id}>{props.answer}</p>
      </div>
    </li>
  );
}

export default AnswerAlternativeListItem;
