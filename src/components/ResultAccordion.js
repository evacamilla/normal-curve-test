import React from 'react';
import AnswerAlternative from './AnswerAlternative.js';

function ResultAccordion(props) {
  if(props.questionIndex == props.i ){
    console.log('första');
    return (  

        <div>
            <div onClick={props.setQuestion} key={props.i} id={props.i} className="accordion">
            <h3 id={props.i}>{props.number + ". " + props.heading}</h3>
            {/* <div id={props.i} className="result-number-div">
                <span className="chosen-answer">{props.chosenAnswer}</span> | <span className="normal-answer">3</span>
            </div> */}

            <div className="one-question">
            <p>
                {props.question}
            </p>
            <div className="question-answers">
                <ul>
                    {props.allaFragor[
                    props.questionIndex
                    ].answers.map((answer, i) => {
                    return (
                        <AnswerAlternative
                        key={i}
                        id={i}
                        answer={answer}
                        />
                    );
                    })}
                </ul>
            </div>
            </div>
        </div>
      </div>
  );
  } else {
    console.log('andra');
    return (  
        <div onClick={props.setQuestion} id={props.i} key={props.i} className="accordion result-accordion passed">
          <h3 id={props.i}>{props.number + ". " + props.heading}</h3>
          <div id={props.i} className="result-number-div">
            <span className="chosen-answer">{props.chosenAnswer}</span> | <span className="normal-answer">3</span>
          </div>
        </div>
    );
  }
  

}

export default ResultAccordion;