import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import './Submenu.css'; 
import Logo from '../images/Logo.jpg'
const Submenu = () => {
  return (
    <Container fluid className="submenu-container py-3">
      <Container className="submenu-content">
        <Row className="align-items-center">
          <Col lg={9}>
            <div className="d-flex align-items-center">
              <h3 className="submenu-title">Epashikino Resort & Spa</h3>
              <div className="d-flex align-items-center submenu-stars">
                <span className="d-flex" style={{ marginRight: '15px' }}>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-warning" style={{ marginRight: '4px' }} />
                  ))}
                </span>
                <Button variant="link" className="text-dark submenu-share-button">
                  <FaShareAlt />
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2">
              <Badge className="submenu-badge" pill>
                4.5
              </Badge>
              <div className="rating-circles">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="rating-circle" />
                ))}
                <div className="rating-circle-half" />
              </div>
              <span>(View 2514 reviews)</span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>Nairobi Nakuru Highway, Nakuru</span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <FaPhoneAlt className="mr-2" />
              <span>+254 (0) 705 455 001 / +254 (0) 788 455 001</span> 
            </div>
            <div className="d-flex align-items-center mt-2">
              <FaEnvelope className="mr-2" />
              <span>info@epashikinoresort.com / sales@epashikinoresort.com</span>
            </div>
          </Col>
          <Col lg={3} className="text-right">
            <img
              src={Logo}
              alt="Radisson Logo"
              style={{ height: '100px' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Submenu;
