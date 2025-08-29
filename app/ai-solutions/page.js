import React from 'react'
import AiLandingPage from '../components/aiSolutions/aiLandingPage'
import AiCardSection from '../components/aiSolutions/aiCardSection'
import DrivingInnovation from '../components/aiSolutions/drivingInnovation'

const page = () => {
  return (
    <div>
      <AiLandingPage/>
      <AiCardSection/>
      <DrivingInnovation/> 
      {/* <FooterHeading/>  */}
    </div>
  )
}

export default page
