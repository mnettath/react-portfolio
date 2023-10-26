import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Blog' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;