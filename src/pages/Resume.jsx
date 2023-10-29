import React from "react";
import BootcampResume from "../assets/BootcampResume.pdf"

const Resume = () => {
  return (
    <div className="mt-3 mx-3 vh-100">
      <h3 className="mb-3">Resume</h3>
      <div className="resume-text">
        <p className="mb-5">
          Download my resume&nbsp;
          <a href={BootcampResume} download>
            here
          </a>
        </p>
        <h4>Front-end Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>JSON</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
