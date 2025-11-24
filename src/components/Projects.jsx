import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PROJECTS = [

  {
  title: "SIMS (Student Information Management System)",
  desc: "Developed end-to-end UI modules for a large-scale government Student Information Management System. Built interactive dashboards, student data records, medical claims tracking, teacher & headmaster resource management, and attendance monitoring screens. Improved usability, optimized performance, and implemented reusable React components for better scalability.",
  tech: ["react", "hicharts", "bootstrap", "material-ui"],
  demo: "#",
  github: "#",
},
  {
    title: "Indian GOV (TCS)",
    desc: "Worked for Election Commission of India (ECI) including EPTBS, NGSP, and NVSP modules. Developed responsive UIs using React, Bootstrap, and Material UI for voter registration, EPIC cards, and data management.",
    tech: ["react", "bootstrap", "material-ui"],
    demo: "#",
    github: "#",
  },
  {
    title: "Insurance Domain (TCS)",
    desc: "Worked with Generali to create responsive UIs using Redux, ReactJS, and Material UI. Integrated a chat interface with GPT prompts for queries, including auto-complete and auto-suggest features.",
    tech: ["react", "material-ui", "redux"],
    demo: "#",
    github: "#",
  },
  
  {
    title: "Food & Beverage Industry (TCS)",
    desc: "Developed responsive UIs using React and Material UI, integrating GenAI for product suggestions, ingredient details, and chat-based document extraction.",
    tech: ["react", "material-ui"],
    demo: "#",
    github: "#",
  },
  {
    title: "Telecom Domain (TCS)",
    desc: "Worked on UI development using Angular, integrating Power BI reports and GPT-powered chat interfaces to enhance user functionality.",
    tech: ["react", "bootstrap", "material-ui"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <Container>
      <div className="panel">
        
        {/* ⭐ Centered Heading */}
        <h2 className="text-center mb-4">Projects</h2>

        <Row className="mt-3">
          {PROJECTS.map((p, i) => (
            <Col md={4} className="mb-4" key={i}>
              <div className="panel project-card h-100 d-flex flex-column">
                
                <h5 className="project-title">{p.title}</h5>
                <p className="project-desc flex-grow-1">{p.desc}</p>

                <div className="mb-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="badge bg-info text-dark me-1">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* <div className="d-flex gap-2 mt-3">
                  <Button size="sm" className="btn-glow" href={p.demo}>
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline-light" href={p.github}>
                    GitHub
                  </Button>
                </div> */}

              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  </section>
);

export default Projects;
