import React, { useRef, useState, useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Scrollablemenu.css';

const ScrollableMenu = () => {
  const menuRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const updateScrollButtons = () => {
      if (menuRef.current) {
        setCanScrollLeft(menuRef.current.scrollLeft > 0);
        setCanScrollRight(
          menuRef.current.scrollWidth > menuRef.current.clientWidth + menuRef.current.scrollLeft
        );
      }
    };

    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  const scroll = (scrollOffset) => {
    menuRef.current.scrollLeft += scrollOffset;
  };

  const handleNavigation = (path) => {
    navigate(path); 
  };

  return (
    <Container fluid className="scrollable-menu-container" style={{marginTop: '10px'}}>
      <Row className="align-items-center">
        {canScrollLeft && (
          <Button
            variant="link"
            className="scroll-button"
            onClick={() => scroll(-200)}
          >
            <FaAngleLeft size={20} />
          </Button>
        )}
        <div ref={menuRef} className="scrollable-menu">
          <Button variant="light" className="menu-item" onClick={() => handleNavigation('/')}>
            Overview
          </Button>
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/rooms')}>
            Rooms
          </Button>
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/services')}>
            Services
          </Button>
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/restaurant')}>
            Restaurants & Bars
          </Button>
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/conferences')}>
            Meetings & Events
          </Button>
          
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/destinations')}>
            Nearby Attractions
          </Button>
          <Button variant="outline-light" className="menu-item" onClick={() => handleNavigation('/contact')}>
            Contact
          </Button>
        </div>
        {canScrollRight && (
          <Button
            variant="link"
            className="scroll-button"
            onClick={() => scroll(200)}
          >
            <FaAngleRight size={20} />
          </Button>
        )}
      </Row>
    </Container>
  );
};

export default ScrollableMenu;
