import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="fw-bold">Our Vision</h3>
            <p>
              Our vision is beyond transactions, we aim to set new standards of
              excellence and client-centric services in Dubai’s real estate
              industry...
            </p>
          </Col>
          <Col md={6}>
            <h3 className="fw-bold">Our Mission</h3>
            <p>
              At Primadom, we are committed to being more than just a real
              estate agency; we are your trusted partner in turning visions into
              reality...
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionMission;
