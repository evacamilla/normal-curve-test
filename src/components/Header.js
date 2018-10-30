import React from 'react';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';


function Header(props) {
  return (
    <header>
    <Menu
      //changeChapter={this.changeChapter}
    />
    </header>
  );
}

export default Header;
