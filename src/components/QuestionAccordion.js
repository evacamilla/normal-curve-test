import React from 'react';

function QuestionAccordion(props) {
  return (  
    <div id={props.id} className="accordion">
      <h3>{props.number + " " + props.heading}</h3>
    </div>
  );
}

export default QuestionAccordion;