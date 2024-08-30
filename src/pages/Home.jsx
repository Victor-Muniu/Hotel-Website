import React from 'react';
import Submenu from '../components/Submenu';
import HotelBookingForm from '../components/HotelBookingForm';
import BookingForm from '../components/BookingForm';
import ScrollableMenu from '../components/Scrollablemenu';
import DetailsSection from '../components/DetailsSection';
import RoomTypes from '../components/RoomTypes';
import Services from '../components/Services';



function Home() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
      <Submenu />
      <HotelBookingForm />
      {/***<BookingForm /> /** */}
      <ScrollableMenu />
      <DetailsSection />
      <RoomTypes />
      <Services />
      
    </div>
  );
}

export default Home;
