import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MealSection.css'; 
import res3 from '../images/IMG_20200919_083748_426.jpg'
function RestaurantSection() {
  return (
    <Container className="my-3 p-3 border rounded meal-section">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <img
          src={res3}
            alt="Breakfast"
            className="img-fluid rounded"
            style={{width: '500px', height:'300px'}}
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="font-weight-bold">Breakfast</h2>
          <p>Weekdays 6:30 am - 10:30 am</p>
          <p>Weekends 6:30 am - 11:00 am</p>
          <Button variant="link" className="text-danger">
            SEE MORE <span className="ml-2">&rarr;</span>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default RestaurantSection