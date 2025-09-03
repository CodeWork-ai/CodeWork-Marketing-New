import React from 'react'
import EventUpdates from '../components/event-updates/eventUpdates'
import ScrollImage from '../components/event-updates/scrollImage'
import AiWorkshop from '../components/event-updates/aiWorkshop'

const page = () => {
  return (
    <div>
      <EventUpdates />
      <AiWorkshop />
      <ScrollImage />
    </div>
  )
}

export default page
