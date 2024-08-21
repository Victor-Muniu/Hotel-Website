import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn,  FaTiktok, FaWhatsapp  } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";

const Footer = () => {
    const hotDestinations = [
        "Hells Gate", "Soysambu Conservency", "Lake Elementaita", "Lake Elementaita Conservancy", "Lake Nakuru", "Hells Gate",
        "Lord Egerton Castle", "Menengai Crater", "Sleeping Warrior"
    ];

    return (
        <footer style={{backgroundColor: '#6F4E37', color: '#ecf0f1', padding: '20px 0', marginTop: '10px'}}>
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-4">
                        <h5>Hot destinations</h5>
                        <div className="d-flex flex-wrap justify-content-center">
                            {hotDestinations.map((destination, index) => (
                                <Button key={index} variant="outline-light" className="m-2">
                                    {destination}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <h6>Quick links</h6>
                        <ul className="list-unstyled">
                            <li>Best Online Rate Guarantee</li>
                            <li>Blog</li>
                            <li>Destinations</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Travel professionals</h6>
                        <ul className="list-unstyled">
                            <li>Partners</li>
                            <li>Travel agents</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Corporate</h6>
                        <ul className="list-unstyled">

                            <li>Media</li>
                            <li>Procurement</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Legal</h6>
                        <ul className="list-unstyled">
                            <li>Privacy Center</li>
                            <li>Legal notice</li>

                            <li>Site usage agreement</li>
                            <li>Digital Accessibility</li>

                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={3}>
                        <h6>Help</h6>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Sitemap</li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-center">
                        <p>&copy; 2024 Epashikino Resort $ Spa. All rights reserved.</p>
                    </Col>
                    <Col md={3} className="text-right">
                        <div>
                            <FaFacebookF className="mr-3" style={{margin:'5px'}} />
                            <FaInstagram className="mr-3" style={{margin:'5px'}} />
                            <FaPinterestP className="mr-3" style={{margin:'5px'}} />
                            <FaXTwitter className="mr-3"  style={{margin:'5px'}}/>
                            <FaYoutube className="mr-3"  style={{margin:'5px'}}/>
                            <FaTiktok className="mr-3"  style={{margin:'5px'}}/>
                            <FaWhatsapp className="mr-3"  style={{margin:'5px'}}/>
                            <MdAttachEmail className="mr-3"  style={{margin:'5px'}}/>
                            <SiTripadvisor className="mr-3"  style={{margin:'5px'}}/>
                            <FaLinkedinIn  style={{margin:'5px'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
