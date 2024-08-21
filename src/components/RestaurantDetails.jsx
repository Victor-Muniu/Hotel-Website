import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './DetailsSection.css'
function RestaurantDetails() {
  return (
    <div className="details-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="details-card">
              <h2 className="details-title">
                Savor fusion cuisine from our restaurants.
              </h2>
              <p className="details-text">
               Our in-house chef offers guests a blend of Kenya, Asian and Mediterranean cuisine. Indulge in artfully created dishes at our restaurants
               , where dining is all about the experience and flavors. 
              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RestaurantDetails