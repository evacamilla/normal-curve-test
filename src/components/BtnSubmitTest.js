import React from 'react';

function BtnSubmitTest(props) {
  let btnDisabled = '';
  props.filledInAllAnswers
    ? (btnDisabled = '')
    : (btnDisabled = 'btn-disabled');

  return <button className={'btn' + ' ' + btnDisabled} onClick={props.sumAllAnswers}>Lämna in test</button>;
}

export default BtnSubmitTest;
