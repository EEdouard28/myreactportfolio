import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <div className="container">
      <h1>
        Evince <span className="lName">Edouard</span>
      </h1>
      <Nav></Nav>
    </div>
  );
}

export default Header;
