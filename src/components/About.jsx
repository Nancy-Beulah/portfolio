import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaPaintBrush, FaPlug } from "react-icons/fa";
import "../About.css";

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaReact size={30} color="#61DAFB" />,
      desc: "Expertise in building responsive UIs with React.js, ensuring seamless experiences across devices."
    },
    {
      title: "UI/UX Implementation",
      icon: <FaPaintBrush size={30} color="#FF6B6B" />,
      desc: "Skilled at converting modern design mockups into fully functional, pixel-perfect interfaces using advanced CSS frameworks."
    },
    {
      title: "Integration Specialist",
      icon: <FaPlug size={30} color="#FFD93D" />,
      desc: "Experience integrating apps with APIs, authentication, reports, and chat system integrations."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <Container>
        <h2 className="section-title text-center mb-4">About Me</h2>

        {/* Feature Boxes */}
        <Row className="mb-4">
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="feature-box h-100 text-center p-3 shadow-sm">
                <div className="icon mb-2">{skill.icon}</div>
                <Card.Title className="card-title">{skill.title}</Card.Title>
                <Card.Text className="card-text">{skill.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Professional Summary */}
        <div className="about-box mt-4">
          <h5>Professional Summary</h5>
          <p className="tools-text">
            As a dedicated frontend developer with <strong>3.10 years of experience</strong>, I specialize
            in building responsive user interfaces and scalable web applications using <strong>React.js</strong>. My expertise lies in creating seamless user experiences across devices.
          </p>
          <p className="tools-text">
            I have a strong foundation in <strong>JavaScript, TypeScript, HTML, and CSS</strong>,
            with professional experience in building clean, maintainable, and high-performance interfaces.
          </p>
          <p className="tools-text">
            At TCS, I contributed to telecom, insurance and government sector projects,
            collaborating with cross-functional teams to deliver high-quality, user-focused web apps.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
