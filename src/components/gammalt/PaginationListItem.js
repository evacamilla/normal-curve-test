import React from 'react';
function PaginationListItem(props) {

  return (
      <div className={props.underline}>
        <li id={props.counter} onClick={props.setQuestion}>
          <div id={props.counter} className="number-div">
            {props.number}
          </div>
        </li>
      </div>
  );
}

  // displayPagination = () => {
  //   let paginationUl = [];
  //   let number = 1;
  //   let underline = '';

  //   for (let i = 0; i <= 9; i++) {
  //     let li = '';

  //     if (i == this.props.questionIndex) {
  //       underline = 'underline';
  //     } else {
  //       underline = '';
  //     }
  //     li = (
  //       <PaginationListItem
  //         key={i}
  //         counter={i}
  //         setQuestionIndex={this.props.setQuestionIndex}
  //         number={number}
  //         underline={underline}
  //       />
  //     );

  //     number++;
  //     paginationUl.push(li);
  //   }
  //   return paginationUl;
  // };


export default PaginationListItem;
