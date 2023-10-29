import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/images/Maya_Profile.jpg";

const About = () => {
  return (
    <div className="mt-3 mx-3 vh-100">
      <h3 className="mb-3">About Me</h3>
      <img
        src={profilePic}
        className="img-thumbnail img-fluid w-25 mb-3"
        alt="profile picture of Maya Nettath"
      ></img>
      <div className="about-text d-flex flex-column">
        <p>
          Welcome! I'm Maya, a passionate and dedicated software developer based
          in beautiful Denver, Colorado. In November 2023, I completed a Full
          Stack Coding Bootcamp with the University of Denver. My journey here
          began after 8 years of working in customer service became
          unfulfilling. I became interested in pursuing tech after seeing the
          positive impact that apps can have in simplifying day-to-day tasks for
          customers. An initial exploration of UX design introduced me to the
          role of Software Developers. Through a FreeCodeCamp certification, I
          discovered my love for coding - a blend of creativity,
          problem-solving, and attention to detail that resonated with me.
        </p>
        <p>
          My toolkit includes an array of cutting-edge technologies, but my
          absolute favorites are React.js, Express.js, MongoDB, and MySQL.
        </p>
        <p>
          I am excited to further develop my skills and cannot wait for what the
          future holds!
        </p>
      </div>
    </div>
  );
};

export default About;
