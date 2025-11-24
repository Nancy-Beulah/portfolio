// File: src/components/Contact.jsx
import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../App";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const { theme } = useContext(ThemeContext);

  // Form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // 🔥 Demo Formspree working link
  const formAction = "https://formspree.io/f/mrbveeeq";

  // Validation rules
  const validate = () => {
    let temp = {};

    // Name validation
    if (!formData.name.trim()) {
      temp.name = "Name is required";
    } else if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) {
      temp.name = "Enter a valid name (letters only, min 3 characters)";
    }

    // Email validation
    if (!formData.email.trim()) {
      temp.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      temp.email = "Enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      temp.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      temp.message = "Message must be at least 10 characters";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setStatus("sending");
  };

  return (
    <>
      {/* Inline CSS */}
      <style>
        {`
          .error-text {
            color: #ef4444;
            font-size: 14px;
            margin-top: 4px;
          }
        `}
      </style>

      <section id="contact" className="section py-5">
        <Container>
          <h2 className="text-center mb-4">Get In Touch</h2>

          <p className="text-center mb-5">
            Have a project in mind or want to discuss opportunities? Feel free to reach out.
          </p>

          <Row className="g-4">

            {/* Contact Form */}
            <Col md={6}>
              <Card className="panel p-4">

                <Form action={formAction} method="POST" onSubmit={handleSubmit}>

                  {/* Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="_replyto"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                    {errors.message && <p className="error-text">{errors.message}</p>}
                  </Form.Group>

                  <input type="hidden" name="_subject" value="New message from portfolio" />

                  <div className="d-flex gap-2 mt-3">
                    <Button type="submit" className="btn-glow">
                      Send Message
                    </Button>
                    <Button
                      type="reset"
                      className="btn-outline-glow"
                      onClick={() => {
                        setFormData({ name: "", email: "", message: "" });
                        setErrors({});
                      }}
                    >
                      Reset
                    </Button>
                  </div>

                  {status === "sending" && (
                    <p className="mt-3 text-muted">Sending...</p>
                  )}
                </Form>

              </Card>
            </Col>

            {/* Right Side Contact Info */}
            <Col md={6}>
              <Card className="panel p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="mb-3">Contact Information</h5>

                  <p className="d-flex align-items-center mb-2">
                    <FaEnvelope className="me-2" />
                    <a href="mailto:nancybeulah.t@gmail.com" className="contact-link">
                      nancybeulah.t@gmail.com
                    </a>
                  </p>

                  <p className="d-flex align-items-center mb-2">
                    <FaPhone className="me-2" />
                    +91 8555993452
                  </p>

                  <p className="d-flex align-items-center mb-2">
                    <FaMapMarkerAlt className="me-2" />
                    Hyderabad, India
                  </p>

                  <hr />

                  <h5>Connect</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href="https://linkedin.com/in/nancy-kumari-t-19872526b"
                      target="_blank"
                      className="icon-link"
                    >
                      <FaLinkedin size={26} />
                    </a>
                    <a
                      href="https://github.com/Nancy-Beulah"
                      target="_blank"
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
    </>
  );
};

export default Contact;
