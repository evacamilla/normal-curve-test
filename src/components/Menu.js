import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function Menu(props) {
  return (
    <div>
      <i className="fas fa-bars" onClick={props.toggleMenu} />
      <ul>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact={true}
            to="/introduktion"
          >
            Introduktion
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact={true}
            to="/sefilmen"
          >
            Se filmen
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact={true}
            to="/fyllidinasvar"
          >
            Fyll i dina svar
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="link-is-active"
            exact={true}
            to="/resultat"
          >
            Resultat
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

