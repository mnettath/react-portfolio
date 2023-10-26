import React from "react";

function Header() {
  return (<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white">Maya Nettath</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Header;
