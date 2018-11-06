import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            activeClassName="link-is-active" 
            to="/introduktion"
          >
            Introduktion
            <hr />
          </NavLink>
        </li>
        <li className="two">
          <NavLink
            activeClassName="link-is-active"
            to="/sefilmen"
          >
            Se filmen
            <hr />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            to="/fyllidinasvar"
          >
            Fyll i dina svar
            <hr />
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="link-is-active"
            to="/resultat"
          >
            Resultat
            <hr />
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Menu;
