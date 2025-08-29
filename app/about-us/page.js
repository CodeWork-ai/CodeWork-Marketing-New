import React from 'react'
import AboutLanding from '../components/about/aboutLanding'
import WhoWeAre from '../components/about/whoWeAre'
import ManagementTeam from '../components/about/managementTeam'
import TestimonialClient from '../components/testimonial/testimonialClient'

const page = () => {
  return (
    <div>
        <AboutLanding/>
        <WhoWeAre/>
        <ManagementTeam/>
    </div>
  )
}

export default page