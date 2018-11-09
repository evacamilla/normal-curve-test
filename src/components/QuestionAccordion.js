import React from 'react';

function QuestionAccordion(props) {
  if(props.questionIndex == props.id ){
    console.log('händer');
    return (  
      <div onClick={props.handleClick} id={props.id} className="accordion">
        <h1 id={props.id}>{props.number + " " + props.heading}</h1>
        <div className="one-question">
          <p>
            {props.question}
          </p>
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