import React from "react";
import NavTabs from "./Navigation";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-white">Maya Nettath</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <NavTabs />
        </div>
      </div>
    </nav>
  );
}

export default Header;
