import React, {useState} from 'react';
import { Card, Row, Col, Button, Dropdown } from 'react-bootstrap';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import './BookingCard.css'
const BookingCard = ({ room }) => {
    

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Card className="booking-card">
            <Card.Body>
                <h4>{room.title}</h4>
                <Row>
                    <Col md={4}>
                        <div className="booking-location">
                            <span>Where are you going?</span>
                            <h6>Radisson Blu Hotel</h6>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="booking-dates">
                            <span>Check-in - Check-out</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                startDate={startDate}
                                endDate={endDate}
                                selectsStart
                                inline
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                startDate={startDate}
                                endDate={endDate}
                                selectsEnd
                                inline
                            />
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="booking-room-guests">
                            <span>Rooms & Guests</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="link">
                                    1 room , 2 adults
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="booking-special-rates">
                            <span>Special Rates</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="link">
                                    Lowest available rates
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-end mt-3">
                        <Button variant="danger">BOOK</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BookingCard;
