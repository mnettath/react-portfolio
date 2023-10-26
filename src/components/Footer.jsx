import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="footer text-white text-center p-3">
      <a href="https://github.com/mnettath/">
        <i
          className="fa fa-github fa-2x footer-icon"
          // style={{ color: "#ffffff" }}
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/maya-nettath/">
        <i
          className="fa fa-linkedin-square fa-2x footer-icon"
          // style={{ color: "#ffffff" }}
        ></i>
      </a>
      <a href="https://stackoverflow.com/users/22804539/maya-n">
        <i
          className="fa fa-stack-overflow fa-2x footer-icon"
          // style={{ color: "#ffffff" }}
        ></i>
      </a>
    </footer>
  );
};

export default Footer;
