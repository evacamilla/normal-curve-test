import React from 'react';

function ToggleQuestionView(props) {
  
  let animateToggle = '';
    props.toggleBooleon
      ? (animateToggle = '')
      : (animateToggle = 'animate-toggle-right');

  return (
    <div onClick={props.toggleView} className="toggle-div">
      <div className="toggle-background">
        <div className={'toggle-circle ' + animateToggle} />
      </div>
    </div>
  );
}

export default ToggleQuestionView;
