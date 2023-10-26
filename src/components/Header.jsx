import React from "react";
import NavTabs from "./Navigation";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white">Maya Nettath</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavTabs />
        </div>
      </div>
    </nav>
  );
}

export default Header;
