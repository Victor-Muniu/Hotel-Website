import React, {useState} from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import image1 from '../images/IMG_0650.JPG'
import image2 from '../images/IMG_0654.JPG'
import image4 from '../images/IMG_0669.JPG'
import image9 from '../images/IMG_0723.JPG'
import { GrGallery } from "react-icons/gr";
import RoomGallery from './RoomGallery';
const Gallery = () => {
    const [modalShow, setModalShow] = useState(false);
    const images = [
        image1, image2, image4, image9
    ]
    return (
        <Container fluid style={{ backgroundColor: '#f3f3f3', padding: '20px' }}>
            <Row>
                <Col md={12}>
                    <Row>
                        <Col md={4} xs={12} style={{ position: 'relative' }}>
                            <Image src={image1} fluid style={{ height: '450px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                            <Button
                                variant="outline-light"
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    padding: '10px 20px',
                                    borderRadius: '30px',
                                }}
                                onClick={() => setModalShow(true)}
                            >
                                <GrGallery /> SEE THE GALLERY
                            </Button>
                        </Col>
                        <Col >
                            <Col md={12}>
                            <Image src={image2} fluid style={{ height: '222.5px', width: '100%', objectFit: 'cover', borderRadius: '10px', marginBottom: '2.5px'}} />
                            </Col>
                            <Col md={12}>
                            <Image src={image4} fluid style={{ height: '222.5px', width: '100%', objectFit: 'cover', borderRadius: '10px', marginTop: '2.5px'}} />
                            </Col>
                        </Col>
                        <Col md={4}>
                        <Image src={image9} fluid style={{ height: '450px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        </Col>
                    </Row>

                </Col>
            </Row>
            <RoomGallery show={modalShow} onHide={() => setModalShow(false)} images={images} />
        </Container>
    );
};

export default Gallery;
