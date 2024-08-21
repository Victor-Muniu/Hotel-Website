import React, { useState } from 'react';
import { Modal, Button, Carousel, Image, Col, Row } from 'react-bootstrap';
import './RoomGallery.css';

function RoomGallery({ show, onHide, images }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <Modal show={show} onHide={onHide} size="xl" centered>
            <Modal.Body style={{ padding: 0 }}>
                <Row noGutters>
                    <Col md={9}>
                        <Carousel
                            activeIndex={selectedImageIndex}
                            onSelect={(selectedIndex) => setSelectedImageIndex(selectedIndex)}
                            indicators={false}
                            interval={null}
                        >
                            {images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <div className="main-image-container">
                                        <Image src={image} fluid className="main-image" />
                                        <div className="text-overlay">
                                            <h5>Epashikino Resort & Spa</h5>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col md={3} className="thumbnail-sidebar">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail-container ${index === selectedImageIndex ? 'active' : ''}`}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <Image src={image} thumbnail className="thumbnail-image" />
                                <div className="thumbnail-caption">Superior Room</div> {/* Adjust this as per your content */}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RoomGallery;
