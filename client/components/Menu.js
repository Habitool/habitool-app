import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/componentStyles/Menu.css';

const Menu = ({ show, click }) => {
  // create a var to an array with an element ['menu']
  const menuClass = ['menu'];

  if(show) {
    menuClass.push('show');
  }

  // {menuClass.join(' ')}
  return (
    <div className={menuClass.join(' ')} onClick={click}>
      <ul className="menu__links" >
        <li>
          <Link to="/">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup">
              Sign Up
          </Link>
        </li>
        <li>
          <Link to="/logout">
              Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
