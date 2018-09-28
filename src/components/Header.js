import React from 'react';
import logo from '../images/logos/stockholmsLansLandsting_textUnder.png';


function Header(props) {
  return (
    <header>
      {
        //TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
      }
      <div className="logo-container">
        <img src={logo} alt="Stockholms läns landstings logga"/>
      </div>
      <i className="fas fa-bars" onClick={props.toggleMenu} />
      <h2 className="chapter-title">{props.chapter}</h2>
    </header>
  );
}

export default Header;
