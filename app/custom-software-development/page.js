import React from 'react'
import CustomSoftwareLanding from '../components/customSoftware/customSoftwareLanding'
import WhyCustomSoftware from '../components/customSoftware/whyCustomSoftware'
import CustomDevelopment from '../components/customSoftware/customDevelopment'
import DevelopmentProcess from '../components/customSoftware/developmentProcess'
import BusinessWithCustom from '../components/customSoftware/businessWithCustom'

const page = () => {
  return (
    <div>
      <CustomSoftwareLanding/>
      <WhyCustomSoftware/>
      <CustomDevelopment/>
      <DevelopmentProcess/>
      <BusinessWithCustom/>
    </div>
  )
}

export default page
