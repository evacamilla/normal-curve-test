import React from 'react';

function OneQuestion(props) {
  return (  
    <div className="one-question">
        <h1>
        {props.number +
            '. ' +
            props.heading}
        </h1>

        <p>
        {props.question}
        </p>
  </div>
  );
}

export default OneQuestion;