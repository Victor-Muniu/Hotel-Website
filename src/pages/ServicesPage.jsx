import React from 'react'
import HotelBookingForm from '../components/HotelBookingForm'
import ScrollableMenu from '../components/Scrollablemenu'
import Services from '../components/Services'
import Submenu from '../components/Submenu'

function ServicesPage() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
      <Submenu />
        <HotelBookingForm />
        <ScrollableMenu />
        <Services />
    </div>
  )
}

export default ServicesPage