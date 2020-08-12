import React from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';


// Functional Component with Anonymous fn
const Header = function () {

  // JSX 
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Ticket Booking</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Menu></Menu>
        </div>
      </nav>
    </header>
  )
}

export default Header;
