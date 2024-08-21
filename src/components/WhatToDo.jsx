import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhatToDo.css'; 

const WhatToDo = () => {
  return (
    <Container className="my-4">
      <Card className="border-0">
        <Card.Body>
          <Row>
            <Col md={12}>
              <h2 className="font-weight-bold">What to do in Nakuru</h2>
              <p>
                
Experience the breathtaking landscapes and vibrant culture of East Africa while staying in Nakuru, a thriving city in Kenya's Rift Valley. Our hotel is conveniently located for business travelers and safari enthusiasts alike. Just a short distance away is Lake Elementaita, renowned for its stunning flamingo population and diverse wildlife. Explore the region's rich history at local museums, where you can learn about Nakuru's role in Kenya's development. After a day of exploration, savor the flavors of nyama choma, a beloved local dish, at our hotel. Discover more of our recommended attractions below.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WhatToDo;
