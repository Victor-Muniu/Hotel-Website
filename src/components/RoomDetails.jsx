import React , {useState}from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaWifi, FaTv, FaCoffee ,FaChromecast, FaShower} from 'react-icons/fa';
import { TbIroning } from "react-icons/tb";
import BookingCard from './BookingCard'; 
import './RoomDetails.css'; 

const rooms = [
    {
        title: 'Superior Room',
        image: 'path_to_image/superior_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    {
        title: 'Premium Room - Park Facing',
        image: 'path_to_image/premium_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    {
        title: 'Premium Room - Park Facing',
        image: 'path_to_image/premium_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    {
        title: 'Premium Room - Park Facing',
        image: 'path_to_image/premium_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    {
        title: 'Premium Room - Park Facing',
        image: 'path_to_image/premium_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    {
        title: 'Premium Room - Park Facing',
        image: 'path_to_image/premium_room.jpg',
        size: '33 m²',
        adults: '2 adults',
        children: '1 child (0-11)',
        bed: '2 twin or 1 king',
        amenities: [
            { icon: <FaWifi />, label: 'WiFi' },
            { icon: <FaShower />, label: 'Air Conditioning' },
            { icon: <FaTv />, label: 'Television' },
            { icon: <FaChromecast/>, label: 'Mini Bar' },
            { icon: <FaCoffee />, label: 'Coffee Machine' },
            {icon: <TbIroning />, label: 'Iron Box'}
        ],
    },
    // Add more room objects here
];

const RoomDetails = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleBookNow = (room) => {
        setSelectedRoom(room); 
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
                                    <Button variant="link">READ MORE</Button>
                                    <Button variant="danger" onClick={() => handleBookNow(room)}>BOOK NOW</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedRoom && <BookingCard room={selectedRoom} />} 
        </div>
    );
}

export default RoomDetails;
