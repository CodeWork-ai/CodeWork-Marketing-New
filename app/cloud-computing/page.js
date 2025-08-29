import React from 'react'
import CloudComputingLanding from '../components/cloudComputing/cloudComputingLanding'
import CloudComputing from '../components/cloudComputing/cloudComputing'
import BenefitsCloudComputing from '../components/cloudComputing/benefitsCloudComputing'
import CloudComputingProcess from '../components/cloudComputing/cloudComputingProcess'
import GrowthWithComputing from '../components/cloudComputing/growthWithComputing'

const page = () => {
  return (
    <div>
        <CloudComputingLanding/>
        <BenefitsCloudComputing/>
        <CloudComputing/>
        <CloudComputingProcess/>
        <GrowthWithComputing/>

    </div>
  )
}

export default page