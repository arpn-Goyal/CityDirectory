import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
  {
    name: "Marco Rossi",
    company: "Immo S.r.l.",
    img: "/assets/client1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    name: "Luca Bianchi",
    company: "Tosca S.r.l.",
    img: "/assets/client2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    name: "Sofia Ricci",
    company: "Casa S.r.l.",
    img: "/assets/client3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">
          Discover What Our Clients Have to Say
        </h2>
        <Row>
          {testimonials.map((t, idx) => (
            <Col md={4} key={idx}>
              <Card className="p-4 mb-4 shadow-sm">
                <Card.Body>
                  <p className="mb-3">“{t.text}”</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <strong>{t.name}</strong>
                      <br />
                      <small>{t.company}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
