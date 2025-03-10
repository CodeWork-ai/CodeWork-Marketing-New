import React from 'react'
import PenetrationTestingLanding from '../components/penetrationTestingService/penetrationTestingLanding'
import BenefitsPenetrationTesting from '../components/penetrationTestingService/benefitsPenetrationTesting'
import PenetrationTestingMethodology from '../components/penetrationTestingService/penetrationTestingMethodology'
import EnhancingCybersecurity from '../components/penetrationTestingService/enhancingCybersecurity'

const page = () => {
  return (
    <div>
      <PenetrationTestingLanding/>
      <BenefitsPenetrationTesting/>
      <PenetrationTestingMethodology/>
      <EnhancingCybersecurity/>
    </div>
  )
}

export default page
