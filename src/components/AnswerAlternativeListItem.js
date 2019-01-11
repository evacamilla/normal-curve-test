import React from 'react';

function AnswerAlternativeListItem(props) {
  const classChosen = props.chosen ? "chosen" : "";
  const classNormal = props.normal ? "mormal" : "";
  return (
    <li
      className={"answer-alternative-li " + classChosen + " " + classNormal}
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
