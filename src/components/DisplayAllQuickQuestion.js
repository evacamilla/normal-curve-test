import React, { Component } from 'react';

function DisplayAllQuickQuestion(props) {
  return (
    <div>
      <select
        key={props.counter}
        id={props.counter}
        onClick={props.setQuestion}
      >
        <option value="" hidden>{props.heading}</option>
        <option id="0">0</option>
        <option id="1">1</option>
        <option id="2">2</option>
        <option id="3">3</option>
        <option id="4">4</option>
        <option id="5">5</option>
        <option id="6">6</option>
      </select>
    </div>
  );
}
export default DisplayAllQuickQuestion;
