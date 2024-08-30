import React, { useRef, useState, useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ScrollableMenu.css';

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

  // Add touch event handlers
  useEffect(() => {
    const menuElement = menuRef.current;
    let startX = 0;
    let scrollLeft = 0;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      scrollLeft = menuElement.scrollLeft;
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      const walk = (touch.clientX - startX) * 1; // Adjust scroll speed by multiplying
      menuElement.scrollLeft = scrollLeft - walk;
    };

    if (menuElement) {
      menuElement.addEventListener('touchstart', onTouchStart);
      menuElement.addEventListener('touchmove', onTouchMove);
    }

    // Clean up event listeners on unmount
    return () => {
      if (menuElement) {
        menuElement.removeEventListener('touchstart', onTouchStart);
        menuElement.removeEventListener('touchmove', onTouchMove);
      }
    };
  }, []);

  return (
    <Container fluid className="scrollable-menu-container" style={{marginTop: '10px'}}>
      <Row className="align-items-center">
       
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
       
      </Row>
    </Container>
  );
};

export default ScrollableMenu;
