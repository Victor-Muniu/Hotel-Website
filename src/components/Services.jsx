import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUtensils, FaBusinessTime, FaSwimmingPool,  FaUsers, FaCar, FaMugHot, FaGlassCheers,  FaWifi, FaCreditCard, FaTshirt, FaGift } from 'react-icons/fa';
import { MdOutlineRoomService, MdFreeBreakfast } from "react-icons/md";
import { PiVideoConferenceFill } from "react-icons/pi"
const Services = () => {
  const services = [
    
    { icon: <FaBusinessTime />, title: 'Executive business lounge', text: 'Executive business lounge' },
    
    { icon: <FaUsers />, title: 'Meeting facilities', text: 'Meeting facilities/social space' },
    { icon: <FaUtensils />, title: 'On-site dining', text: 'On-site restaurant(s)' },
    { icon: <FaCar />, title: 'Parking', text: 'Parking' },
    
    { icon: <FaGlassCheers />, title: 'Bar', text: 'Bar' },
    { icon: <MdFreeBreakfast />, title: 'Breakfast buffet', text: 'Breakfast buffet' },
    { icon: <FaCreditCard />, title: 'Cashless Payment', text: 'Cashless Payment' },
    { icon: <FaMugHot />, title: 'Complimentary coffee and tea', text: 'Free coffee and tea in the lobby' },
    {icon: <MdOutlineRoomService />, title: 'Room service', text: 'Room service'},
  
    { icon: <FaTshirt />, title: 'Laundry service', text: 'Laundry service' },
  
    
    { icon: <FaWifi />, title: 'Free Wi-Fi', text: 'Free Wi-Fi' },
    { icon: <FaGift />, title: 'Gift shop', text: 'Gift shop' },
    { icon: <MdFreeBreakfast />, title: 'Grab & Go Breakfast', text: 'Grab & Go Breakfast' },
    { icon: <PiVideoConferenceFill />, title: 'Video Conferencing', text: 'Video Conferencing' },
    { icon: <FaSwimmingPool />, title: 'Swimming pool', text: 'Swimming pool' },
  ];

  return (
    <Container className="mt-5">
    <h2>Services</h2>
    <Row>
      {services.map((service, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="icon mr-3" style={{ fontSize: '24px', marginRight: '15px' }}>{service.icon}</div>
                <div>
                  <Card.Title className="mb-1">{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default Services;
