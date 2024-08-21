import React from 'react'
import Submenu from '../components/Submenu'
import ScrollableMenu from '../components/Scrollablemenu'
import RestaurantBanner from '../components/RestaurantBanner'
import RestaurantDetails from '../components/RestaurantDetails'
import Features from '../components/Features'
import MealSection from '../components/MealSection'
import RestaurantSection from '../components/RestaurantSection'
import BarSection from '../components/BarSection'

function Restaurant() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
        <Submenu />
        <RestaurantBanner />
        <ScrollableMenu />
        <RestaurantDetails />
        <Features />
        <MealSection />
        <RestaurantSection />
        <BarSection />
    </div>
  )
}

export default Restaurant