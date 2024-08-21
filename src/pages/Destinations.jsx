import React from 'react'
import HotelBookingForm from '../components/HotelBookingForm'
import ScrollableMenu from '../components/Scrollablemenu'
import WhatToDo from '../components/WhatToDo'
import Attraction from '../components/Attraction'

function Destinations() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
        <HotelBookingForm />
        <ScrollableMenu />
        <WhatToDo />
        <Attraction />
    </div>
  )
}

export default Destinations