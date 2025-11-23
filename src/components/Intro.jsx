import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <section id="intro" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="hero-card">
              <h1 className="hero-title">Hi, I'm Nancy Kumari Terapalli</h1>
              <p className="hero-sub">
                <span style={{ color: "#3b82f6", fontWeight: "700" }}>
                  Frontend Developer
                </span>{" "}
                specializing in React. I develop responsive UIs and web
                applications with over 3.10 years of experience, delivering
                efficient, scalable solutions.
              </p>

              <div className="d-flex gap-3 mt-4 cta-group">
                <Button
                  className="btn-glow"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>

                <Button className="btn-outline-glow" href="#projects">
                  Scroll Down
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
