import React from 'react';
import {Link} from "react-router-dom";
import './nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>
            <Link to="/" className="navLink">home</Link>
          </li>
          <li>
            <Link to="/hero" className="navLink">hero</Link>
          </li>
          <li>
            <Link to="/savedHero" className="navLink">saved hero</Link>
          </li>
          <li>
            <Link to="/about" className="navLink">about</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
