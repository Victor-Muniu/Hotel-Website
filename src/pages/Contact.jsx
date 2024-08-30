import React from 'react'
import HotelBookingForm from '../components/HotelBookingForm'
import ScrollableMenu from '../components/Scrollablemenu'
import ContactInformation from '../components/ContactInformation'
import MapComponent from '../components/MapComponent'

function Contact() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
        <HotelBookingForm />
        <ScrollableMenu />
        <ContactInformation />
        <MapComponent />
    </div>
  )
}

export default Contact