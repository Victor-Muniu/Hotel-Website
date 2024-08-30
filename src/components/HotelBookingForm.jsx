import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Dropdown, Card, Image } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import Night from '../images/3W1A0179-2.jpg';  
import Small2 from '../images/3W1A0141.jpg';  
import Small1 from '../images/3W1A0149.jpg'; 

const HotelBookingForm = () => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="p-3">
      <Row>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <Image src={Night} fluid style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
            </Col>
            <Col>
              <Row>
                <Col md={12}>
                  <Image src={Small1} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                </Col>
                <Col md={12}>
                  <Image src={Small2} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="p-3" style={{ height: '450px' }}>
            <Card.Body>
              <Row>
                <Card.Title className="mb-2" style={{ fontSize: '2.5rem' }}>
                  Enjoy upscale comfort near Lake Elementaita
                </Card.Title>
                <Card.Text>
                  Check-in: 10:00 am | Check-out: 10:00 am
                </Card.Text>
                <Card.Text>From <strong>USD 110.50</strong>/night</Card.Text>
                <small>*lowest rate for the next 30 days</small>
                <Button
                  variant="outline-primary"
                  className="mt-2"
                  style={{ backgroundColor: '#6F4E37', color: 'white', borderColor: '#6F4E37' }}
                  onClick={handleShow}
                >
                  CHECK OUR PRICE CALENDAR
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Calendar */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose dates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="mb-3">
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Where are you going?
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Radisson Blu Hotel</Dropdown.Item>
                    {/* Add more locations as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Check-in - Check-out
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Mon 19 Aug - Tue 20 Aug</Dropdown.Item>
                    {/* Add more date ranges as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Rooms & Guests
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">1 room, 2 adults</Dropdown.Item>
                    {/* Add more options as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Special Rates
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Lowest available rates</Dropdown.Item>
                    {/* Add more rates as needed */}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            {/* Date Picker Section */}
            <Row>
              <Col>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  inline
                />
              </Col>
              <Col>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  inline
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            BOOK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HotelBookingForm;
