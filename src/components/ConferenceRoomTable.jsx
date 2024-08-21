import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import Conference from '../images/3W1A0083.jpg'

const ConferenceRoomTable = () => {
  // Sample data for rooms
  const rooms = [
    {
      name: 'Mount Kilimanjaro',
      size: '591 m2',
      boardroom: '-',
      cabaret: '300',
      classroom: '600',
      reception: '-',
      rounds: '380',
      theatre: '600',
      uShape: '-',
    },
    {
      name: 'Chui',
      size: '59 m2',
      boardroom: '20',
      cabaret: '16',
      classroom: '30',
      reception: '30',
      rounds: '-',
      theatre: '30',
      uShape: '18',
    },
    {
      name: 'Nyati',
      size: '59 m2',
      boardroom: '16',
      cabaret: '24',
      classroom: '30',
      reception: '30',
      rounds: '-',
      theatre: '30',
      uShape: '18',
    },
    {
      name: 'Kifaru',
      size: '80 m2',
      boardroom: '18',
      cabaret: '32',
      classroom: '40',
      reception: '40',
      rounds: '35',
      theatre: '50',
      uShape: '22',
    },
    {
      name: 'Simba',
      size: '30 m2',
      boardroom: '18',
      cabaret: '-',
      classroom: '-',
      reception: '-',
      rounds: '-',
      theatre: '-',
      uShape: '-',
    },
  ];

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
              <i className="bi bi-people"></i> Cabaret
            </th>
            <th>
              <i className="bi bi-layout-text-sidebar-reverse"></i> Classroom
            </th>
            <th>
              <i className="bi bi-columns-gap"></i> Reception
            </th>
            <th>
              <i className="bi bi-circle"></i> Rounds
            </th>
            <th>
              <i className="bi bi-play-btn"></i> Theatre
            </th>
            <th>
              <i className="bi bi-square"></i> U Shape
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={Conference}// Replace with actual image source
                    alt={room.name}
                    style={{ width: '80px', marginRight: '10px' }}
                  />
                  <div>
                    <strong>{room.name}</strong>
                    <br />
                    {room.size}
                    <br />
                    <Button variant="outline-primary" size="sm">
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              </td>
              <td>{room.boardroom}</td>
              <td>{room.cabaret}</td>
              <td>{room.classroom}</td>
              <td>{room.reception}</td>
              <td>{room.rounds}</td>
              <td>{room.theatre}</td>
              <td>{room.uShape}</td>
              <td>
                <Button variant="danger">BOOK SPACE</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ConferenceRoomTable;
