import React from 'react'
import HotelBookingForm from '../components/HotelBookingForm'
import ScrollableMenu from '../components/Scrollablemenu'
import WhatToDo from '../components/WhatToDo'
import Attraction from '../components/Attraction'
import Submenu from '../components/Submenu'

function Destinations() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
      <Submenu />
        <HotelBookingForm />
        <ScrollableMenu />
        <WhatToDo />
        <Attraction />
    </div>
  )
}

export default Destinations