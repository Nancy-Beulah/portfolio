import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// ICONS
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> }
];

const Skills = () => (
  <section id="skills" className="section">
    <Container>
      <div className="panel">

        {/* ⭐ Centered Heading */}
        <h2 className="text-center">Skills</h2>

        <Row className="mt-3">
          <Col md={8}>
            <p className="about-text">Technologies and tools I work with to bring ideas to life.</p>

            {/* ICON GRID */}
            <div className="skills-grid mt-3">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </Col>

          <Col md={4}>
            <div className="panel-inner">
              <strong>Additional Skills</strong>
              <ul className="mt-2">
                <li>Responsive Design</li>
                <li>Cross-browser Compatibility</li>
                <li>Web Accessibility</li>
                <li>Performance Optimization</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </section>
);

export default Skills;
