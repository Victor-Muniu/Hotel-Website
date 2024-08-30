import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import Conference from '../images/3W1A0083.jpg'; // Assuming this path is correct
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";
const ConferenceRoomTable = () => {
  // State to manage modal visibility and selected room
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Sample data for rooms
  const rooms = [
    {
      name: 'Kilimanjaro',
      boardroom: '-',
      cluster: '100',
      classroom: '200',
      rounds: '-',
      theatre: '210',
      uShape: '120',
    },
    {
      name: 'Menengai',
      boardroom: '-',
      cluster: '80',
      classroom: '70',
      rounds: '-',
      theatre: '123',
      uShape: '60',
    },
    {
      name: 'Mawenzi',
      boardroom: '21',
      cluster: '-',
      classroom: '27',
      rounds: '-',
      theatre: '50',
      uShape: '18',
    },
    {
      name: 'Kibo',
      boardroom: '18',
      cluster: '-',
      classroom: '-',
      rounds: '-',
      theatre: '34',
      uShape: '18',
    },
  ];

  // Function to handle "BOOK SPACE" button click
  const handleBookSpace = (room) => {
    setSelectedRoom(room);
    setShowBookingForm(true);
  };

  // Function to handle closing the booking form modal
  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
    setSelectedRoom(null);
  };

  return (
    <Container fluid>
      {/* Filters Row */}
      <Row className="my-4">
        <Col md={3}>
          <Form.Select aria-label="Select Attendees">
            <option>Attendees</option>
            {/* Add options here */}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select aria-label="Select Setup">
            <option>Setup</option>
            {/* Add options here */}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Control type="text" placeholder="Search in the table" />
        </Col>
        <Col md={3} className="text-end">
          <Button variant="link">CLEAR ALL FILTERS</Button>
        </Col>
      </Row>

      {/* Table */}
      <Table bordered>
        <thead>
          <tr>
            <th>Meeting rooms (8 results)</th>
            <th>
              <i className="bi bi-grid-1x2"></i> Boardroom
            </th>
            <th>
              <i className="bi bi-people"></i> Cluster
            </th>
            <th>
              <i className="bi bi-layout-text-sidebar-reverse"></i> Classroom
            </th>
            <th>
              <i className="bi bi-play-btn"></i> Theatre
            </th>
            <th>
              <i className="bi bi-square"></i> U Shape
            </th>
            <th>
              <i className="bi bi-square"></i> Book
            </th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={Conference}
                    alt={room.name}
                    style={{ width: '80px', marginRight: '10px' }}
                  />
                  <div>
                    <strong>{room.name}</strong>
                  </div>
                </div>
              </td>
              <td>{room.boardroom}</td>
              <td>{room.cluster}</td>
              <td>{room.classroom}</td>
              <td>{room.theatre}</td>
              <td>{room.uShape}</td>
              <td>
                <Button variant="danger" onClick={() => handleBookSpace(room)}>BOOK SPACE</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Booking Form Modal */}
      <Modal show={showBookingForm} onHide={handleCloseBookingForm} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Book Room - {selectedRoom?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>

              <Col md={7}>

                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Company Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Contact Person</Form.Label>
                        <Form.Control type="text" placeholder="Contact Person" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="you@company.com" />
                  </Form.Group>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="+1 (555) 000-0000" />
                  </Form.Group>
                  <Row style={{marginTop: '20px'}}>
                    <Col md={6}>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>Check in Date</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Check Out Date</Form.Label>
                        <Form.Control type="date"/>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Number of Paxs</Form.Label>
                    <Form.Control type="number" placeholder="Number of Paxs" />
                  </Form.Group>
                  
                  <Form.Group controlId="formServices">
                    <Form.Label>Services</Form.Label>
                    <Row>
                      <Col md={6}>
                        <Form.Check type="checkbox" label="Full Day Conference" />
                        <Form.Check type="checkbox" label="Half Day Conference" />
                        <Form.Check type="checkbox" label="Team Building" />
                      </Col>

                    </Row>
                  </Form.Group>
                  <Button variant="dark" type="submit" className="mt-3">
                    Book Now
                  </Button>
                </Form>
              </Col>

              {/* Right Column - Contact Information */}
              <Col md={5}>
                <h4>Call us :</h4>

                <p>+254 705 455 001 / +254 788 455 001</p>
                <h4>Email Us :</h4>
                <p>info@epashikinoresort.com / sales@epashikino.com</p>
                <h4>You can find us on :</h4>
                <p> <FaFacebookF className="mr-3" style={{ margin: '5px' }} />
                  <FaInstagram className="mr-3" style={{ margin: '5px' }} />
                  <FaPinterestP className="mr-3" style={{ margin: '5px' }} />
                  <FaXTwitter className="mr-3" style={{ margin: '5px' }} />
                  <FaYoutube className="mr-3" style={{ margin: '5px' }} />
                  <FaTiktok className="mr-3" style={{ margin: '5px' }} />
                  <FaWhatsapp className="mr-3" style={{ margin: '5px' }} />
                  <MdAttachEmail className="mr-3" style={{ margin: '5px' }} />
                  <SiTripadvisor className="mr-3" style={{ margin: '5px' }} />
                  <FaLinkedinIn style={{ margin: '5px' }} /></p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ConferenceRoomTable;
