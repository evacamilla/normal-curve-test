import React from 'react';

function ResultDiv(props) {
  return (  
    <div key={props.i} className="accordion result-accordion passed">
      <h3>{props.heading}</h3>
      <div className="result-number-div">
        <span className="chosen-answer">{props.chosenAnswer}</span> | <span className="normal-answer">3</span>
      </div>
    </div>
  );
}

export default ResultDiv;