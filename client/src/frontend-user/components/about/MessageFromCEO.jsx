import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import ceoImage from "../../assets/ceo.jpg"; // uploaded image

const MessageFromCEO = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <Image src={""} alt="CEO" fluid rounded />
          </Col>
          <Col md={7}>
            <h2 className="fw-bold mb-3">Message From CEO</h2>
            <p>
              Welcome to Primadom, your gateway to a distinctive real estate
              experience crafted to fulfill your aspirations...
            </p>
            <p>
              Since our inception in 2024, Primadom has been driven by a set of
              core values that form the bedrock of our operations...
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MessageFromCEO;
