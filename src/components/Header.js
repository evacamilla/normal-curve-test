import React from 'react';

function Header(props) {
  return (
    <header>
      {
        //TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
      }
      <i className="fas fa-bars" onClick={props.toggleMenu} />
      <h2 className="chapter-title">{props.chapter}</h2>
    </header>
  );
}

export default Header;
