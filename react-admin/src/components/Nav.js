import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    const naystyle ={
        color: 'blue'
    };
  return (
    <nav >
         <h1>Home</h1>
        <ul>
            
        <Link style={naystyle} to="/About">
            <li>About</li>
            </Link>
            <Link style={naystyle} to="/Shop">
            <li>Shop</li>
            </Link>
        </ul>

      

    </nav>
  );
}

export default Nav;
