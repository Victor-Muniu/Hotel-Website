import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaCalendarAlt, FaPercentage } from 'react-icons/fa';
import RoomCard from './RoomCard'; // Import the RoomCard component
import './BookingForm.css';

const BookingForm = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [showCard, setShowCard] = useState(false);

  return (
    <Container className="booking-form mt-4 p-3">
      <Row className="align-items-center mb-3">
        <Col xs={12} md={3}>
          <InputGroup>
            <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
            <Form.Control type="date" placeholder="Check-in" />
          </InputGroup>
        </Col>
        <Col xs={12} md={3}>
          <InputGroup>
            <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
            <Form.Control type="date" placeholder="Check-out" />
          </InputGroup>
        </Col>
        <Col xs={12} md={3}>
          <Form.Control
            type="text"
            aria-label="Room and guests"
            value={`${rooms} room, ${adults} adults`}
            readOnly
            onClick={() => setShowCard(!showCard)}
          />
        </Col>
        <Col xs={12} md={2}>
          <InputGroup>
            <InputGroup.Text><FaPercentage /></InputGroup.Text>
            <Form.Control type="text" placeholder="Special Rates" />
          </InputGroup>
        </Col>
        <Col xs={12} md={1}>
          <Button variant="coffee-brown" className="w-100">BOOK</Button>
        </Col>
      </Row>
      {showCard && <RoomCard roomNumber={1} onClose={() => setShowCard(false)} />}
    </Container>
  );
};

export default BookingForm;
