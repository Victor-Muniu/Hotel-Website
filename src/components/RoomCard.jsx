import React, { useState } from 'react';
import { Card, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const RoomCard = ({ roomNumber, onClose }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleAdultsChange = (delta) => {
    setAdults((prev) => Math.max(1, prev + delta));
  };

  const handleChildrenChange = (delta) => {
    setChildren((prev) => Math.max(0, prev + delta));
  };

  return (
    <Card className="mb-3">
      <Card.Header>Room {roomNumber}</Card.Header>
      <Card.Body>
        <Row className="align-items-center mb-3">
          <Col xs={6}>N° of adults</Col>
          <Col xs={6} className="text-right">
            <Button variant="outline-secondary" onClick={() => handleAdultsChange(-1)}>
              <FaMinus />
            </Button>
            <span className="mx-2">{adults}</span>
            <Button variant="outline-secondary" onClick={() => handleAdultsChange(1)}>
              <FaPlus />
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={6}>
            N° of children
            <small className="text-muted d-block">(Up to 11 years)</small>
          </Col>
          <Col xs={6} className="text-right">
            <Button variant="outline-secondary" onClick={() => handleChildrenChange(-1)}>
              <FaMinus />
            </Button>
            <span className="mx-2">{children}</span>
            <Button variant="outline-secondary" onClick={() => handleChildrenChange(1)}>
              <FaPlus />
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-right">
        <Button variant="danger" onClick={onClose}>DONE</Button>
      </Card.Footer>
    </Card>
  );
};

export default RoomCard;
