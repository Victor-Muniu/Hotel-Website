import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineLocalPhone , MdAttachEmail } from "react-icons/md";
const ContactInformation = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Epashikino Resort & Spa - Contact information</h2>
      <Row className="justify-content-center">
        <Col md={5} className="mb-3">
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">General contact</Card.Title>
              <Card.Text>
                <div>
                  <MdOutlineLocalPhone /> +254 705 455 001 / +254 788 455 001
                </div>
                <div className="mt-2">
                  <MdAttachEmail /> info@epashikinoresort.com
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="mb-3">
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Meetings & Events</Card.Title>
              <Card.Text>
                <div>
                <MdOutlineLocalPhone /> +254 705 455 001 / +254 788 455 001
                </div>
                <div className="mt-2">
                <MdAttachEmail /> reservations@epashikinoresort.com
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInformation;
