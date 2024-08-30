import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { FaWifi, FaTv, FaCoffee, FaChromecast, FaShower } from 'react-icons/fa';
import { TbIroning } from "react-icons/tb";
import RoomDetailsModal from './RoomDetailsModal';
import Booking2 from './Booking2';
import './RoomDetails.css';
import image1 from '../images/3W1A0096.jpg'
import image2 from '../images/3W1A0214.jpg'
import image3 from '../images/20220421_122333.jpg'
import image4 from '../images/20220421_121643.jpg'

import image1_1 from '../images/3W1A0092.jpg'
import image1_2 from '../images/3W1A0108.jpg'
import image1_3 from '../images/3W1A0202.jpg'
import image1_4 from '../images/3W1A0110.jpg'
import image2_1  from '../images/3W1A0238.jpg'

import image3_1 from '../images/20220421_121939.jpg'
import image3_2 from '../images/20220421_121908.jpg'
import image3_4 from  '../images/20220421_122359.jpg'

import image4_1 from '../images/20220421_121713.jpg'
import image4_2 from '../images/20220421_121553.jpg'
import image5_3 from '../images/20240213_173024.jpg'
const rooms = [
    {
        title: 'Deluxe',
        image: image1,
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast />, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            { icon: <TbIroning />, label: 'Iron Box' }
        ],
        images: [
            image1_1,
            image1_2,
            image1_3,
            image1_4
        ],
        description: 'The Deluxe rooms at Epashikino Resort & Spa offer a comfortable and stylish stay with features such as mountain views, a balcony or terrace, and a spacious bathroom with both a shower and bath. Each room is equipped with a satellite TV, air conditioning and a seating area, . Guests can also enjoy amenities like a 24-hour room service menu, heating, ironing facilities, and complimentary WiFi. The rooms are designed to provide a relaxing and convenient experience for all guests'
    },
    {
        title: 'Deluxe Standard',
        image: image2,
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast />, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            { icon: <TbIroning />, label: 'Iron Box' }
        ],
        images: [
            image2,
            image2_1,
            image1_3,
            image1_4
        ],
        description: 'The Deluxe rooms at Epashikino Resort & Spa offer a comfortable and stylish stay with features such as mountain views, a balcony or terrace, and a spacious bathroom with both a shower and bath. Each room is equipped with a satellite TV, air conditioning and a seating area, . Guests can also enjoy amenities like a 24-hour room service menu, heating, ironing facilities, and complimentary WiFi. The rooms are designed to provide a relaxing and convenient experience for all guests'
        
    },

    {
        title: 'Family Rooms',
        image: image3,
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast />, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            { icon: <TbIroning />, label: 'Iron Box' }
        ],
        images: [
            image3_1,
            image3_2,
            image3,
            image3_4
        ],
        description : 'The family rooms at Epashikino Resort & Spa are designed to be interconnecting, providing a convenient setup for families. These rooms typically feature comfortable accommodations with multiple beds, ensuring ample space for a family stay. The interconnecting feature allows two rooms to be connected internally, offering privacy for parents while keeping children close by. The rooms are well-equipped with modern amenities to ensure a comfortable and enjoyable stay for guests'
    },
    {
        title: 'Standard',
        image: image4,
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast />, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            { icon: <TbIroning />, label: 'Iron Box' }
        ],
        images: [
            image4,
            image4_1,
            image4_2,
            image5_3
        ],
        description: 'The standard rooms at Epashikino Resort & Spa are stylishly designed and come with features like a satellite TV, air conditioning and a seating area, Each room includes a private bathroom with a shower and bath, as well as ironing facilities and complimentary WiFi. The rooms are well-equipped to provide a comfortable stay for guests.'
    },


];

const RoomDetails = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [showRoomDetails, setShowRoomDetails] = useState(false);

    const handleBookNow = () => {
        setShowBookingForm(true);
    };

    const handleCloseBooking = () => {
        setShowBookingForm(false);
    };

    const handleReadMore = (room) => {
        setSelectedRoom(room);
        setShowRoomDetails(true);
    };

    const handleCloseRoomDetails = () => {
        setShowRoomDetails(false);
        setSelectedRoom(null);
    };


    return (
        <div className="room-cards-container">
            <h2>Room types</h2>
            <p>Epashikino Resort & Spa features 71 rooms for business or leisure travelers, complete with free Wi-Fi and in-room coffee and tea facilities.</p>
            <Row>
                {rooms.map((room, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="room-card">
                            <Card.Img variant="top" src={room.image} />
                            <Card.Body>
                                <Card.Title>{room.title}</Card.Title>
                                <div className="room-details">
                                    <span>{room.size}</span> | <span>{room.adults}</span> | <span>{room.children}</span> | <span>{room.bed}</span>
                                </div>
                                <div className="main-amenities mt-3">
                                    {room.amenities.map((amenity, idx) => (
                                        <span key={idx} className="amenity-icon" title={amenity.label}>
                                            {amenity.icon}
                                        </span>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <Button variant="link" onClick={() => handleReadMore(room)}>READ MORE</Button>
                                    <Button variant="danger" onClick={handleBookNow}>BOOK NOW</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={showBookingForm} onHide={handleCloseBooking} size="lg" centered>
                <Booking2 handleClose={handleCloseBooking} />
            </Modal>
            {selectedRoom &&
                <RoomDetailsModal
                    room={selectedRoom}
                    show={showRoomDetails}
                    handleClose={handleCloseRoomDetails}
                />
            }
        </div>
    );
}

export default RoomDetails;
