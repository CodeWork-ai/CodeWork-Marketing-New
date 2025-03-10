import React from 'react'
import CloudComputingLanding from '../components/cloudComputing/cloudComputingLanding'
import KeyBenefitsCloud from '../components/cloudComputing/keyBenefitsCloud'
import CloudAdoptionProcess from '../components/cloudComputing/cloudAdoptionProcess'
import EnablingCloudComputing from '../components/cloudComputing/enablingCloudComputing'

const page = () => {
  return (
    <div>
      <CloudComputingLanding/>
      <KeyBenefitsCloud/>
      <CloudAdoptionProcess/>
      <EnablingCloudComputing/>
    </div>
  )
}

export default page
