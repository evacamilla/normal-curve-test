import React from 'react';
import AnswerAlternativeListItem from './AnswerAlternativeListItem.js';

function ResultAccordion(props) {
    if (props.questionIndex == props.i) {
        return (
            <div key={props.i} id={props.i} className="accordion-full">
                <div onClick={props.hideQuestion}>
                    <h3 className="accordion-heading" id={props.i}>{props.number + ". " + props.heading}</h3>
                    <p>
                        {props.question}
                    </p>
                    <div className="one-question">
                        <div className="question-answers">
                            <ul>
                                {props.questions[props.questionIndex].answers.map((answer, i) => {
                                    return (
                                        <AnswerAlternativeListItem
                                            key={i}
                                            id={i}
                                            answer={answer}
                                            chosen={props.chosenAnswer == i}
                                            normal={props.normalAnswer == i}
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
        return (
            <div onClick={props.setQuestionIndex} id={props.i} key={props.i} className="accordion-small">
                <h3 className="accordion-heading" id={props.i}>{props.number + ". " + props.heading}</h3>
                <div id={props.i} className="result-number-div">
                    <span className="chosen-answer">{props.chosenAnswer}</span> | <span className="normal-answer">3</span>
                </div>
            </div>
        );
    }


}

export default ResultAccordion;