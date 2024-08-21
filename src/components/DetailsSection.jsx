import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DetailsSection.css';

const DetailsSection = () => {
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
               Epashikino Resort $ Spa, located in Gilgil, is a tranquil retreat set against the backdrop of the Great Rift Valley
              </p>
              <p className="details-text">
               The resort offers luxurious accomodations and is just a short distance from lake Elementaita. Visitors can enjoy a variety of nearby activities including exploring Soysambu Conservancy, visiting the kariandusi prehistoric site, relaxing at the Kariandusi Hot Spring and hiking the Sleeping Warrior Hills. 
              </p>
              <p className="details-text">
                The resort itself features mordern ammenities, including a swimming pool, conference facilities and a restaurant serving diverse culinary delights.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsSection;
