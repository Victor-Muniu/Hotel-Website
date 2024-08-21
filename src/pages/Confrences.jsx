import React from 'react'
import Submenu from '../components/Submenu'
import Conference_banner from '../components/Conference_banner'
import Conference_details from '../components/Conference_details'
import ConferenceRoomTable from '../components/ConferenceRoomTable'
import ScrollableMenu from '../components/Scrollablemenu'
function Confrences() {
  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
        <Submenu />
        <Conference_banner />
        <ScrollableMenu />
        <Conference_details />
        <ConferenceRoomTable />
    </div>
  )
}

export default Confrences