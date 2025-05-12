import React from 'react'
import PenetrationTestingLanding from '../components/penetrationTesting/penetrationTestingLanding'
import PenetrationTesting from '../components/penetrationTesting/penetrationTesting'
import BenefitsPenetrationTesting from '../components/penetrationTesting/benefitsPenetrationTesting'
import PenetrationTestingProcess from '../components/penetrationTesting/penetrationTestingProcess '
import EnhancingCybersecurity from '../components/penetrationTesting/enhancingCybersecurity'

const page = () => {
  return (
    <div>
      <PenetrationTestingLanding/>
      <BenefitsPenetrationTesting/>
      <PenetrationTesting/>
      <PenetrationTestingProcess/>
      <EnhancingCybersecurity/>
     
    </div>
  )
}

export default page
