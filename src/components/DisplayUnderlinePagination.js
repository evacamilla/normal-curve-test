import React from 'react';
function DisplayUnderlinePagination(props) {
  return (
    <div>
      <div className={props.className}>
        <li key={props.counter} id={props.counter} onClick={props.setQuestion}>
          <div id={props.counter} className="number-div">
            {props.number}
          </div>
        </li>
      </div>
    </div>
  );
}

export default DisplayUnderlinePagination;
