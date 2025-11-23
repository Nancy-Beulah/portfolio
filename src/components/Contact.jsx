// File: src/components/Contact.jsx
import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../App";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const { theme } = useContext(ThemeContext);

  const formAction = "https://formspree.io/f/YOUR_FORM_ID";

  return (
    <section id="contact" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Get In Touch</h2>

        <p className="text-center mb-5 contact-line">
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </p>

        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <Card className="panel p-4">
              <Form
                action={formAction}
                method="POST"
                onSubmit={() => setStatus("sending")}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="_replyto"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Type your message..."
                    required
                  />
                </Form.Group>

                <input type="hidden" name="_subject" value="New message from portfolio" />

                <div className="d-flex gap-2 mt-3">
                  <Button type="submit" className="btn-glow">Send Message</Button>
                  <Button type="reset" className="btn-outline-glow">Reset</Button>
                </div>

                {status === "sending" && (
                  <p className="mt-3 text-muted">Sending...</p>
                )}
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <Card className="panel p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="mb-3">Contact Information</h5>

                <p className="d-flex align-items-center contact-line">
                  <FaEnvelope className="me-2" />
                  <a href="mailto:nancybeulah.t@gmail.com" className="contact-link">
                    nancybeulah.t@gmail.com
                  </a>
                </p>

                <p className="d-flex align-items-center contact-line">
                  <FaPhone className="me-2" />
                  +91 9951976339
                </p>

                <p className="d-flex align-items-center contact-line">
                  <FaMapMarkerAlt className="me-2" />
                  Hyderabad, India
                </p>

                <hr className="border-light" />

                <h5>Connect</h5>
                <div className="d-flex gap-3 mt-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <FaLinkedin size={26} />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <FaGithub size={26} />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
