import React from 'react';
import hamburger from '../images/hamburger.png';
import { NavLink } from 'react-router-dom';


function Header(props) {
  return (
    <header className="header">
      {
        //TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
      }
      <div className="hamburger-div">
        <img src={hamburger} alt="" onClick={props.toggleMenu}/>
      </div>
      <div className="chapter-title-div">
        <h2 className="chapter-title">{props.chapter}</h2>
      </div>
          <div id="chart" className="chart">
          {
          //SKA va nåt med high charts här
          }
          </div>
          <div id="container" className="container">
          {
            //SKA va nåt med high charts här
          }
          </div>
    </header>
  );
}

export default Header;
