import React from 'react';

function Header(props){
    return(
        <header className="App-header">
        {//TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
        }
        <i className="fas fa-bars" onClick={props.toggleMenu}></i>
        <p>{props.chapter}</p>
        </header>
    );
}

export default Header;