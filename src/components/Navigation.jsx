import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
