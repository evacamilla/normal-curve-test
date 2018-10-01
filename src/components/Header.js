import React from 'react';
import logo from '../images/logos/stockholmsLansLandsting_textUnder.png';
import hamburger from '../images/hamburger.png';
import { NavLink } from 'react-router-dom';


function Header(props) {
  return (
    <header className="header">
      {
        //TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
      }
      <div className="logo-container">
        <NavLink
          exact 
          to="/introduktion"
        >
          <img src={logo} alt="Stockholms läns landstings logga"/>
        </NavLink> 
      </div>
      <div className="hamburger-div">
        <img src={hamburger} alt="" onClick={props.toggleMenu}/>
      </div>
      <div className="chapter-title-div">
        <h2 className="chapter-title">{props.chapter}</h2>
      </div>
    </header>
  );
}

export default Header;
