import React from 'react'
import { Container, Row, Col, Button, Image, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import res from '../images/3W1A0333.jpg'
import res2 from '../images/DSC_0086.jpg'
import res3 from '../images/IMG_20200919_083748_426.jpg'
function RestaurantBanner() {
  return (
    <Container fluid className="p-3">
            <Row>

                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <Image src={res} fluid style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col>
                            <Col md={12}>
                                <Image src={res2} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
                            </Col>
                            <Col md={12}>
                                <Image src={res3} fluid style={{ height: '225px', width: '100%', objectFit: 'cover' }} />
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

export default RestaurantBanner