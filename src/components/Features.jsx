import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineFreeBreakfast,  MdRoomService, MdFamilyRestroom ,MdChildCare } from "react-icons/md";
import { FaCocktail } from "react-icons/fa";
function Features() {
    const features = [
        {icon: <GiArchiveResearch />, title: 'Accepts Reservations', text: 'Accepts Resevations'},
        {icon: <MdOutlineFreeBreakfast />, title: 'Breakfast Served', text: 'Breakfast Served'},
        {icon: <MdRoomService />, title: 'Dinner Served', text: 'Dinner Served'},
        {icon: <MdFamilyRestroom />, title: 'Family Friendly', text: 'Family Friendly'},
        {icon: <FaCocktail />, title: 'Happy Hour', text: 'Happy Hour'},
        {icon: <MdChildCare />, title: 'Kids Menu', text: 'Kids Menu'},
        
    ]
  return (
    <Container className="mt-5">
    <h2>Features</h2>
    <Row>
      {features.map((service, index) => (
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
  )
}

export default Features