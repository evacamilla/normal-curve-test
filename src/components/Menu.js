import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props) {
  return (
    <nav>
      <i className="fas fa-bars" onClick={props.toggleMenu} />
      <ul>
        <li>
          <NavLink
            onClick={() => {
              props.toggleMenu();
              props.showWelcome();
            }}
            activeClassName="link-is-active"
            exact 
            to="/introduktion"
          >
            Introduktion
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact
            to="/sefilmen"
          >
            Se filmen
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact
            to="/fyllidinasvar"
          >
            Fyll i dina svar
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact
            to="/resultat"
          >
            Resultat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
