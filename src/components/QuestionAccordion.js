import React from 'react';

function QuestionAccordion(props) {
  return (  
    <div className="question-accordion">
      <h3>{props.id + " " + props.heading}</h3>
    </div>
  );
}

export default QuestionAccordion;