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
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="link-is-active"
            to="/sefilmen"
          >
            Se filmen
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            to="/fyllidinasvar"
          >
            Fyll i dina svar
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="link-is-active"
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
