import React from "react";
import { Container } from "react-bootstrap";
import "../WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <Container>
        {/* <div className="panel experience-wrapper"> */}
          <h2 className="section-title">Professional Experience</h2>

          <div className="experience-card">
            <h4 className="role-title">Frontend Developer</h4>
            <h5 className="company">Tata Consultancy Services (TCS)</h5>

            <ul className="experience-list">
              <li>Developing and maintaining web applications using <strong>React.js</strong>.</li>
            <li>Creating <strong>responsive UIs</strong> and <strong>dashboards</strong> for clients, including SIMS projects.</li>
             <li>Implemented <strong>HiCharts</strong> for interactive data visualizations and dynamic reporting.</li>
             <li>Contributed to Indian government portals by developing responsive UIs using <strong>React, Redux, Bootstrap, and React Material UI</strong></li>
             <li>Collaborated with <strong>designers, product managers, and developers</strong> to deliver high-quality frontend solutions.</li>
             <li>Implemented <strong>responsive design</strong> and ensured cross-browser compatibility.</li>
             <li>Participated in <strong>code reviews</strong> and provided constructive feedback to maintain code quality.</li>
            </ul>
          </div>
        {/* </div> */}
      </Container>
    </section>
  );
};

export default WorkExperience;
