import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './RoomType.css';
import image1 from '../images/IMG_0650.JPG'
import image2 from '../images/IMG_0654.JPG'
import image3 from '../images/IMG_0655.JPG'
import image4 from '../images/IMG_0669.JPG'
import image5 from '../images/IMG_0675.JPG'
import image6 from '../images/IMG_0673.JPG'
import image7 from '../images/IMG_0702.JPG'
import image8 from '../images/IMG_0707.JPG'
import image9 from '../images/IMG_0723.JPG'

const RoomTypes = () => {
  return (
    <div className="room-types-section">
      <Container>
        <h2 className="room-types-title">Room types</h2>
        <Row className="room-cards">
          {roomsData.map((room, index) => (
            <Col key={index} md={4} className="room-card-col">
              <Card className="room-card">
                <Carousel>
                  {room.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img className="d-block w-100" src={image} alt={`Slide ${idx + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{room.title}</Card.Title>
                  <div className="room-details">
                    <span>{room.size}</span>
                    <span>{room.adults}</span>
                    <span>{room.children}</span>
                  </div>
                  <span className="room-bed">{room.bed}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="room-nav-buttons">
          <Button variant="light" className="nav-button">See More</Button>
          <Button variant="light" className="nav-button">&lt;</Button>
          <Button variant="light" className="nav-button">&gt;</Button>
        </div>
      </Container>
    </div>
  );
};

const roomsData = [
  {
    images: [
      image1,
      image2,
      image3,
    ],
    title: 'Twin Room',
    size: '33 m²',
    adults: '2 adults',
    children: '1 child (0-11)',
    bed: '2 twin or 1 king',
  },
  {
    images: [
      image4,
      image5,
      image6,
    ],
    title: 'Dulex Double',
    size: '33 m²',
    adults: '2 adults',
    children: '1 child (0-11)',
    bed: '2 twin or 1 king',
  },
  {
    images: [
      image7,
      image8,
      image9
    ],
    title: 'Standard',
    size: '33 m²',
    adults: '2 adults',
    children: '1 child (0-11)',
    bed: '2 twin or 1 king',
  },
  
];

export default RoomTypes;
