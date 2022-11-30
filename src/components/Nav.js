import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="container">
      <Link to="/">About Me</Link>
      <Link to="/Project">Projects</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Resume">Resume</Link>
    </div>
  );
}

export default Nav;
