import React from 'react';
function PaginationListItem(props) {

  return (
      <div className={props.className}>
        <li id={props.counter} onClick={props.setQuestion}>
          <div id={props.counter} className="number-div">
            {props.number}
          </div>
        </li>
      </div>
  );
}

export default PaginationListItem;
