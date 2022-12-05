import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="container navLinks">
      <Link className="linkStyles" to="/">
        About Me
      </Link>
      <Link className="linkStyles" to="/Portfolio">
        Portfolio
      </Link>
      <Link className="linkStyles" to="/Contact">
        Contact
      </Link>
      <a
        className="linkStyles"
        href="https://docs.google.com/document/d/e/2PACX-1vRCvOzafHbju8Zl1R2lKWQox-J7994os60_oFNB6olwA9DtaNjkMVPv2wyEKgNZnw/pub"
      >
        Resume
      </a>
    </div>
  );
}

export default Nav;
