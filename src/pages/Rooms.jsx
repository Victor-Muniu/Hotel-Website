import React from 'react'
import HotelBookingForm from '../components/HotelBookingForm'
import ScrollableMenu from '../components/Scrollablemenu'
import Gallery from '../components/Gallery'
import RoomDetails from '../components/RoomDetails'

function Rooms() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
        <HotelBookingForm />
        <ScrollableMenu />
        <Gallery />
        <RoomDetails />
    </div>
  )
}

export default Rooms