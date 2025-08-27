import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import whoImage from "../../assets/who-we-are.jpg"; // use uploaded image

const WhoWeAre = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h2 className="fw-bold mb-4">Who We Are?</h2>
            <p>
              Primadom has grown from a passionate vision into a leading force
              within Dubai’s property market, backed by nearly two decades of
              industry experience that has shaped the company’s trajectory and
              success...
            </p>
            <p>
              We’ve earned our reputation due to our extensive portfolio from
              iconic locations like Palm Jumeirah and Downtown Dubai...
            </p>
          </Col>
          <Col md={5}>
            <Image src={""} alt="Who We Are" fluid rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre;
