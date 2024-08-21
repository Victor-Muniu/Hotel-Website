import React from 'react';
import { Container, Row, Col, Button, Image, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Night from '../images/3W1A0179-2.jpg';
import Small2 from '../images/3W1A0141.jpg';
import Small1 from '../images/3W1A0149.jpg';


const HotelBookingForm = () => {
    return (
        <Container fluid className="p-3">
            <Row>

                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <Image src={Night} fluid style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col>
                            <Col md={12}>
                                <Image src={Small1} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                            </Col>
                            <Col md={12}>
                                <Image src={Small2} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                            </Col>
                        </Col>
                    </Row>




                </Col>


                <Col md={4} >
                    <Card className="p-3" style={{height: '450px'}}>
                        <Card.Body>
                            <Row>
                                
                                    <Card.Title className="mb-2" style={{ fontSize: '2.5rem' }}>
                                        Enjoy upscale comfort near Lake Elementaita
                                    </Card.Title>
                                    
                                    
                                    <Card.Text>
                                        Check-in: 10:00 am | Check-out: 10:00 am
                                    </Card.Text>
                                
                                
                                    <Card.Text>From <strong>USD 110.50</strong>/night</Card.Text>
                                    <small>*lowest rate for the next 30 days</small>
                                    <Button variant="outline-primary" className="mt-2" style={{ backgroundColor: '#6F4E37', color: 'white', borderColor: '#6F4E37' }}>
                                        CHECK OUR PRICE CALENDAR
                                    </Button>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HotelBookingForm;
