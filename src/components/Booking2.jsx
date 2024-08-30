import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const Booking2 = ({ handleClose }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        fname: '',
        lname: '',
        checkin: '',
        checkout: '',
        adults: 1,
        kids: 0,
        basis: [],
        room_type: []
    });
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { id, value, checked } = e.target;
        setFormData(prevState => {
            const updatedArray = checked
                ? [...prevState[id], value]
                : prevState[id].filter(item => item !== value);

            return {
                ...prevState,
                [id]: updatedArray
            };
        });
    };

    const handleNextClick = async () => {
        setButtonClicked(true);

        setTimeout(async () => {
            try {
                const response = await axios.post('https://hotel-backend-1-trhj.onrender.com/websites', formData);
                setBookingDetails(response.data);
                setShowDetails(true);
                setError(null);
            } catch (error) {
                setError('Failed to make a booking. Please try again.');
            }
            setButtonClicked(false);
        }, 1000);
    };

    return (
        <div className="booking-form">
            {!showDetails ? (
                <>
                    <Alert variant="success">
                        Make your reservations now
                    </Alert>
                    <h4 style={{ marginTop: '20px' }}>Personal information</h4>
                    <Form>
                        <Row style={{ marginTop: '10px' }}>
                            <Col md={6}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="phone_number">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter phone number" 
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col md={6}>
                                <Form.Group controlId="fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter first name"
                                        value={formData.fname}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter last name" 
                                        value={formData.lname}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h4 style={{ marginTop: '20px' }}>Reservation Details</h4>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md={6}>
                                <Form.Group controlId="checkin">
                                    <Form.Label>Check In</Form.Label>
                                    <Form.Control 
                                        type="date" 
                                        value={formData.checkin}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="checkout">
                                    <Form.Label>Check Out</Form.Label>
                                    <Form.Control 
                                        type="date" 
                                        value={formData.checkout}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '15px' }}>
                            <Col md={6}>
                                <Form.Group controlId="adults">
                                    <Form.Label>Adults</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        placeholder="No of adults"
                                        value={formData.adults}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="kids">
                                    <Form.Label>Kids</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        placeholder="No of Kids"
                                        value={formData.kids}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '15px' }}>
                            <Col md={6}>
                                <Form.Group controlId="basis">
                                    <Form.Label>Basis</Form.Label>
                                    <div>
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Bed & Breakfast (BB)" 
                                            value="BB" 
                                            onChange={handleCheckboxChange} 
                                            id="basis"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Half Board (HB)" 
                                            value="HB" 
                                            onChange={handleCheckboxChange} 
                                            id="basis"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Full Board (FB)" 
                                            value="FB" 
                                            onChange={handleCheckboxChange} 
                                            id="basis"
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="room_type">
                                    <Form.Label>Room Type</Form.Label>
                                    <div>
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Dulex" 
                                            value="dulex" 
                                            onChange={handleCheckboxChange} 
                                            id="room_type"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Dulex Standard" 
                                            value="dulex standard" 
                                            onChange={handleCheckboxChange} 
                                            id="room_type"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Family Room" 
                                            value="family room" 
                                            onChange={handleCheckboxChange} 
                                            id="room_type"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Standard" 
                                            value="standard" 
                                            onChange={handleCheckboxChange} 
                                            id="room_type"
                                        />
                                       
                                        
                                        
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="text-center mt-4">
                            <Button 
                                variant="success" 
                                onClick={handleNextClick}
                                style={{ backgroundColor: '#6f4e37', borderColor: '#6f4e37' }} // Coffee brown color
                                className={buttonClicked ? 'rotate' : ''}
                            >
                                Next
                            </Button>
                        </div>
                    </Form>
                    {error && <Alert variant="danger" style={{ marginTop: '10px' }}>{error}</Alert>}
                </>
            ) : (
                <div className="booking-details-card">
                    <Alert variant="info">
                        Congratulations! Your booking is successfully made.
                        <div><strong>Booking ID:</strong> {bookingDetails._id}</div>
                    </Alert>
                    <h5>Booking Details</h5>
                    <p><strong>Name:</strong> {bookingDetails.fname} {bookingDetails.lname}</p>
                    <p><strong>Email:</strong> {bookingDetails.email}</p>
                    <p><strong>Phone Number:</strong> {bookingDetails.phone_number}</p>
                    <p><strong>Check In:</strong> {new Date(bookingDetails.checkin).toLocaleDateString()}</p>
                    <p><strong>Check Out:</strong> {new Date(bookingDetails.checkout).toLocaleDateString()}</p>
                    <p><strong>Adults:</strong> {bookingDetails.adults}</p>
                    <p><strong>Kids:</strong> {bookingDetails.kids}</p>
                    <p><strong>Basis:</strong> {bookingDetails.basis.join(', ')}</p>
                    <p><strong>Room Type:</strong> {bookingDetails.room_type.join(', ')}</p>
                </div>
            )}
        </div>
    );
}

export default Booking2;
