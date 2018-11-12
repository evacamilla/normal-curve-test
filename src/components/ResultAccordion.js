import React from 'react';
import AnswerAlternative from './AnswerAlternative.js';

function ResultAccordion(props) {
  if(props.questionIndex == props.i ){
    console.log('första');
    return (  
        <div key={props.i} id={props.i} className="accordion">
            <div onClick={props.hideQuestion}>
                <h3 id={props.i}>{props.number + ". " + props.heading}</h3>
            </div>

            <div className="one-question">
            <p>
                {props.question}
            </p>
            <div className="question-answers">
                <ul>
                    {props.allaFragor[
                    props.questionIndex
                    ].answers.map((answer, i) => {
                        let specialClassName = '';
                        if(props.chosenAnswer == i){
                            specialClassName = 'chosen';
                        } else if(props.normalAnswer == i) {
                                specialClassName = 'normal';
                        }
                            return (
                                <AnswerAlternative
                                key={i}
                                id={i}
                                answer={answer}
                                specialClassName={specialClassName}
                                />
                            );
                    })}
                </ul>
            </div>
            </div>
        </div>
  );
  } else {
    console.log('andra');
    return (  
        <div onClick={props.setQuestion} id={props.i} key={props.i} className="accordion result-accordion">
          <h3 id={props.i}>{props.number + ". " + props.heading}</h3>
          <div id={props.i} className="result-number-div">
            <span className="chosen-answer">{props.chosenAnswer}</span> | <span className="normal-answer">3</span>
          </div>
        </div>
    );
  }
  

}

export default ResultAccordion;