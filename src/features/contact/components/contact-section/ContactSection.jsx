import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-start">
          <Col lg={6}>
            <h2 className="contact-title">
              <span className="red">Contact</span> Us
            </h2>
            <p className="contact-description">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
            </p>
            
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name *" required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Phone number *" required />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Select>
                  <option value="" disabled selected hidden>How did you find us?</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                </Form.Select>
              </Form.Group>
              
              <Button type="submit" className="send-btn w-100">SEND</Button>
            </Form>
            
            <Row className="contact-info mt-4">
              <Col md={4}>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <span className="info-label">PHONE</span>
                    <span className="info-value">+44 543 871 1234</span>
                  </div>
                </div>
              </Col>
              
              <Col md={4}>
                <div className="info-item">
                  <i className="fas fa-fax"></i>
                  <div>
                    <span className="info-label">FAX</span>
                    <span className="info-value">+44 543 871 1234</span>
                  </div>
                </div>
              </Col>
              
              <Col md={4}>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span className="info-label">EMAIL</span>
                    <span className="info-value">info@termbi.com</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          
          <Col lg={6}>
            <div className="contact-image">
              <img src="/src/shared/assets/images/Rectangle 7541.png" alt="Contact Us" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}