import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa';

const Blog = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center">
            <span className="text-danger fw-bold">News Update:</span>
            <marquee behavior="scroll" direction="left" className="ms-3">
              Ukrainian troops saw Russian soldiers swept away • Philadelphia under ‘code red’ alert as millions from US East Coast • Turkish lira crashes
            </marquee>
          </div>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={7}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
            <Card.Body>
              <Badge bg="light" text="dark">BBC News</Badge>
              <span className="text-muted ms-2">• 10 mins ago</span>
              <Card.Title className="mt-3">People spend night on roofs and in trees after Ukraine dam breach</Card.Title>
              <Card.Text>
                Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zelensky has said.
              </Card.Text>
              <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
                <small className="text-muted">Aug 03, 2023</small>
                <FaComment className="text-muted" />
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <div>
            <Card className="mb-3">
              <Card.Body className="d-flex">
                <img src="https://via.placeholder.com/100x100" alt="news" className="img-thumbnail" />
                <div className="ms-3">
                  <Badge bg="light" text="dark">CNN News</Badge>
                  <span className="text-muted ms-2">• 1 hours ago</span>
                  <Card.Title className="mt-2">CNN Chairman and CEO Chris Licht is out</Card.Title>
                  <small className="text-muted">Business • 2 min read</small>
                  <FaComment className="text-muted" style={{marginLeft: '20px'}}/>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="d-flex">
                <img src="https://via.placeholder.com/100x100" alt="news" className="img-thumbnail" />
                <div className="ms-3">
                  <Badge bg="light" text="dark">BBC News</Badge>
                  <span className="text-muted ms-2">• 1 hours ago</span>
                  <Card.Title className="mt-2">What Turkey's new cabinet says about where country is headed</Card.Title>
                  <small className="text-muted">World • 5 min read</small>
                  <FaComment className="text-muted " style={{marginLeft: '20px'}} />
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="d-flex">
                <img src="https://via.placeholder.com/100x100" alt="news" className="img-thumbnail" />
                <div className="ms-3">
                  <Badge bg="light" text="dark">BBC News</Badge>
                  <span className="text-muted ms-2">• 1 hours ago</span>
                  <Card.Title className="mt-2">This country has the best wines in the world for 2023</Card.Title>
                  <small className="text-muted">Food & Drink • 3 min read</small>
                  <FaComment className="text-muted" style={{marginLeft: '20px'}}/>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body className="d-flex">
                <img src="https://via.placeholder.com/100x100" alt="news" className="img-thumbnail" />
                <div className="ms-3">
                  <Badge bg="light" text="dark">CNN News</Badge>
                  <span className="text-muted ms-2">• 1 hours ago</span>
                  <Card.Title className="mt-2">The double-decker airplane seat is back. Here’s what it looks like now</Card.Title>
                  <small className="text-muted">World • 2 min read</small>
                  <FaComment className="text-muted" style={{marginLeft: '20px'}} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      {/* Latest News Section */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Latest News</h4>
            <Button variant="link" className="text-danger">See all</Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Badge bg="light" text="dark">Formula 1</Badge>
              <span className="text-muted ms-2">• 10 hours ago</span>
              <Card.Title className="mt-3">F1 teams had big upgrades planned for Imola – but what happens now?</Card.Title>
              <small className="text-muted">Sport • 1 min read</small>
              <FaComment className="text-muted " style={{marginLeft: '20px'}} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Badge bg="light" text="dark">BBC News</Badge>
              <span className="text-muted ms-2">• 10 hours ago</span>
              <Card.Title className="mt-3">Ukraine war: Wagner boss rubbishes Russian claims of Ukrainian casualties</Card.Title>
              <small className="text-muted">War • 1 min read</small>
              <FaComment className="text-muted " style={{marginLeft: '20px'}}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Badge bg="light" text="dark">CNN News</Badge>
              <span className="text-muted ms-2">• 10 hours ago</span>
              <Card.Title className="mt-3">Brutal killings of two young girls show one of India’s biggest problems is getting worse</Card.Title>
              <small className="text-muted">World • 1 min read</small>
              <FaComment className="text-muted " style={{marginLeft: '20px'}}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
