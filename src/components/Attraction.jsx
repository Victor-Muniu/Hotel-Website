import React, { useState, useRef, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { FaTree, FaMapMarkerAlt, FaThList } from 'react-icons/fa';
import { GiUndergroundCave, GiMountains } from 'react-icons/gi';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import './Attraction.css';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDwno5wiEuK3ufrKfiLFdrBarPwnP6qHwo';

const attractions = [
    {
        id: 1,
        title: 'Hells Gate National Park',
        distance: '1.96 mi / 3.16 km',
        description: `Hell's Gate National Park is a unique and breathtaking destination located near Lake Naivasha in Nakuru County, Kenya. Known for its dramatic scenery, geothermal activity, and rich biodiversity, Hell's Gate is one of Kenya's most accessible and adventurous national parks. The park is named after a narrow break in the cliffs, once a tributary of a prehistoric lake that fed early humans in the Rift Valley.`,
        icon: <GiUndergroundCave />,
        position: { lat: -0.9686, lng: 36.4302 }
    },
    {
        id: 2,
        title: 'Lake Elmenteita Conservancy',
        distance: '3.71 mi / 5.97 km',
        description: `Lake Elmenteita Conservancy is a captivating natural reserve located in the Great Rift Valley of Kenya, near the town of Gilgil in Nakuru County. This conservancy is centered around Lake Elmenteita, a UNESCO World Heritage Site that is part of the Kenya Lake System along with Lake Nakuru. The conservancy plays a crucial role in protecting the area's unique biodiversity and offers visitors a serene and less crowded alternative to some of the larger national parks.`,
        icon: <FaTree />,
        position: { lat: -0.5332, lng: 36.2743 }
    },
    {
        id: 3,
        title: 'Soysambu Conservancy',
        distance: '4.48 mi / 7.21 km',
        description: `Soysambu Conservancy is a remarkable wildlife reserve located in Nakuru County, within Kenya's Great Rift Valley. Spanning approximately 48,000 acres, this conservancy is part of the larger Delamere Estate and is dedicated to the conservation of biodiversity and the preservation of Kenya's natural heritage.`,
        icon: <FaTree />,
        position: { lat: -0.4164, lng: 36.3471 }
    },
    {
        id: 4,
        title: 'Lake Nakuru',
        distance: '7.97 mi / 12.83 km',
        description: `Lake Nakuru is one of Kenya's most famous and scenic destinations, located in the Great Rift Valley, within Lake Nakuru National Park. Known for its stunning beauty, diverse wildlife, and world-renowned birdlife, the lake and its surrounding park are a major attraction for both local and international visitors. The park is situated near Nakuru town, making it easily accessible and a popular destination for safaris.`,
        icon: <FaTree />,
        position: { lat: -0.3761, lng: 36.0611 }
    },
    {
        id: 5,
        title: 'Sleeping Warrior',
        distance: '2.13 mi / 3.43 km',
        description: `Sleeping Warrior is a fascinating and scenic landmark located in the Great Rift Valley of Kenya, near Lake Elementaita and Lake Nakuru. The "Sleeping Warrior" refers to a dormant volcano whose unique shape, when viewed from certain angles, resembles a reclining warrior. This natural formation is not only a geological wonder but also a place of great cultural and historical significance.`,
        icon: <GiMountains />,
        position: { lat: -0.5571, lng: 36.2547 }
    },
];

const Attraction = () => {
    const [showMap, setShowMap] = useState(false);
    const [selectedAttraction, setSelectedAttraction] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [mapCenter, setMapCenter] = useState({ lat: -0.4164, lng: 36.3471 });
    const mapRef = useRef(null);

    // Search handler
    const handleSearch = () => {
        const result = attractions.find(attraction => attraction.title.toLowerCase().includes(searchValue.toLowerCase()));
        if (result) {
            setMapCenter(result.position);
            setSelectedAttraction(result);
        }
    };

    // Memoize map callback to prevent re-renders
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    return (
        <Container className="my-5">
            <h2 className="mb-4">Explore attractions</h2>
            <div className="mb-4">
                <Button variant="outline-dark" className="me-2">Culture</Button>
                <Button variant="outline-dark" className="me-2">Nature</Button>
                <Button variant="outline-dark">Shopping</Button>
            </div>
            <Row>
                {attractions.map((attraction) => (
                    <Col md={4} className="mb-4" key={attraction.id}>
                        <Card className="h-100">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    {attraction.icon}
                                    <Card.Title className="mb-0 ms-2">{attraction.title}</Card.Title>
                                </div>
                                <Badge bg="light" text="dark" className="mb-3">{attraction.distance} from the hotel</Badge>
                                <Card.Text>{attraction.description}</Card.Text>
                                <Button variant="link" className="text-danger">
                                    SEE MORE <FaMapMarkerAlt />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-end mb-4">
                <Button variant="outline-dark" className="me-2">
                    <FaThList /> LIST
                </Button>
                <Button variant="outline-dark" onClick={() => setShowMap(!showMap)}>
                    <FaMapMarkerAlt /> MAP
                </Button>
            </div>

            {showMap && (
                <div className="mt-4">
                    <Form className="mb-4 d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search attractions..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button onClick={handleSearch}>Search</Button>
                    </Form>
                    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={{ height: '400px', width: '100%' }}
                            zoom={10}
                            center={mapCenter}
                            onLoad={onMapLoad}
                        >
                            {attractions.map((attraction) => (
                                <Marker
                                    key={attraction.id}
                                    position={attraction.position}
                                    label={attraction.title}
                                    icon={attraction.icon}
                                />
                            ))}
                            {selectedAttraction && (
                                <Marker
                                    position={selectedAttraction.position}
                                    icon={{
                                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                        scaledSize: new window.google.maps.Size(40, 40)
                                    }}
                                />
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
            )}
        </Container>
    );
};

export default Attraction;
