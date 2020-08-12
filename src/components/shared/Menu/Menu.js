import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link 
          className="nav-link" to="/ticketsList">List Tickets</Link>
      </li>
    </ul>
  )
}

export default Menu;