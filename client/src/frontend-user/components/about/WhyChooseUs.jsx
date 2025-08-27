import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGlobe, FaUsers, FaNetworkWired, FaLayerGroup } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-5">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="text-center mb-4">
            <FaGlobe size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Market Expertise</h5>
            <p>With years of experience in Dubai’s real estate market...</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <FaLayerGroup size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Diverse Property Portfolio</h5>
            <p>From villas to townhouses, our portfolio caters to all needs.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <FaUsers size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Multilingual Team</h5>
            <p>Our expert team speaks multiple languages for smooth communication.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-center mb-4">
            <h5 className="fw-bold">Customized Solutions</h5>
            <p>Each client is unique, and we tailor services accordingly.</p>
          </Col>
          <Col md={6} className="text-center mb-4">
            <h5 className="fw-bold">Strong Network</h5>
            <p>We leverage connections with leading developers in Dubai.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
