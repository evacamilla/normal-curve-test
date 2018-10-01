import React from 'react';
import logo from '../images/logos/stockholmsLansLandsting_textUnder.png';
import hamburger from '../images/hamburger.png';


function Header(props) {
  return (
    <header className="header">
      {
        //TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
      }
      <div className="logo-container">
        <img src={logo} alt="Stockholms läns landstings logga"/>
      </div>
      <div className="hamburger-div">
        <img src={hamburger} alt=""/>
      </div>
      <div className="chapter-title-div">
        <h2 className="chapter-title">{props.chapter}</h2>
      </div>
    </header>
  );
}

export default Header;
