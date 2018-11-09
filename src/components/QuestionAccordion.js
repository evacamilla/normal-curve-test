import React from 'react';

function QuestionAccordion(props) {
  return (  
    <div onClick={props.handleClick} id={props.id} className="accordion">
      <h3 id={props.id}>{props.number + " " + props.heading}</h3>
    </div>
  );
}

export default QuestionAccordion;