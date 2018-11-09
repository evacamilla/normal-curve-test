import React from 'react';

function BtnSubmitTest(props) {
  let btnDisabled = '';
  props.filledInAllAnswers
    ? (btnDisabled = '')
    : (btnDisabled = 'btn-disabled');

  return <button className={'btn' + ' ' + btnDisabled}>Lämna in test</button>;
}

export default BtnSubmitTest;
