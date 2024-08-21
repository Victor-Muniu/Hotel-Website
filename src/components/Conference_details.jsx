import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './DetailsSection.css';
function Conference_details() {
  return (
    <div className="details-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="details-card">
              <h2 className="details-title">
                Enjoy upscale comfort near Lake Elementaita at our stylish hotel.
              </h2>
              <p className="details-text">
               Epashikino Resort $ Spa offers state-of-the-art conference facilities designed to accomodate a range of coporate events and meetings
              </p>
              <p className="details-text">
               The halls are equipped with high-speed Wi-Fi, modern audiovisual equipment and comfortable seating arrangements to ensure productive environment 
              </p>
              <p className="details-text">
                The resort's conference rooms can host various sizes of gatherings, from intimate meetings to larger conferences. The serene surroundings and attentive service make it ideal locationfor business events, blending professionalism with relaxation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Conference_details