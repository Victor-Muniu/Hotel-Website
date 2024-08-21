import React from 'react'
import { Container, Row, Col, Button, Image, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boardroom from '../images/3W1A0349.jpg'
import Conference from '../images/3W1A0083.jpg'
import Conference1 from '../images/3W1A0077.jpg'
function Conference_banner() {
  return (
    <Container fluid className="p-3">
            <Row>

                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <Image src={Boardroom} fluid style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col>
                            <Col md={12}>
                                <Image src={Conference} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                            </Col>
                            <Col md={12}>
                                <Image src={Conference1} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
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
                                    <Button variant="outline-primary" className="mt-2" style={{ backgroundColor: '#6F4E37', color: 'white', borderColor: '#6F4E37' }}>
                                        CHECK OUR PRICE CALENDAR
                                    </Button>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  )
}

export default Conference_banner