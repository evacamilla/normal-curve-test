import React from 'react';
import { BrowserRouter, 
    Route, Switch, NavLink } from 'react-router-dom'

function Menu(props){
    return(
        <div>
            <i class="fas fa-bars" onClick={props.toggleMenu}></i>
            {
                //Dålig lösning onclick toggle menu?
            }
            <ul>
                <li><NavLink onClick={props.toggleMenu} activeClassName="linkIsActive" exact={true} to="/introduktion">Introduktion</NavLink></li> 
                <li><NavLink onClick={props.toggleMenu} activeClassName="linkIsActive" exact={true} to="/sefilmen">Se filmen</NavLink></li>
                <li><NavLink onClick={props.toggleMenu} activeClassName="linkIsActive" exact={true} to="/svarapadinafragor">Svara på dina frågor</NavLink></li> 
                <li><NavLink onClick={props.toggleMenu} activeClassName="linkIsActive" exact={true} to="/resultat">Resultat</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;