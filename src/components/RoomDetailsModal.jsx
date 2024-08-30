import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const RoomDetailsModal = ({ room, show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>{room.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    {room.images.map((img, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={img} alt={`slide ${index}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="room-details mt-3">
                    <p><strong>Size:</strong> {room.size}</p>
                    <p><strong>Adults:</strong> {room.adults}</p>
                    <p><strong>Children:</strong> {room.children}</p>
                    <p><strong>Bed:</strong> {room.bed}</p>
                </div>
                <div className="main-amenities ">
                        {room.amenities.map((amenity, idx) => (
                            <span key={idx} className="amenity-icon" title={amenity.label}>
                                {amenity.icon}
                            </span>
                        ))}
                </div>
                <div className='mt-5'>
                    <p>{room.description}</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default RoomDetailsModal;
