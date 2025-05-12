import React from 'react'
import DevopsSolutionsLanding from '../components/devopsSolutions/devopsSolutionsLanding'
import BenefitsOfDevOps from '../components/devopsSolutions/benefitsOfDevOps'
import DevopSolutions from '../components/devopsSolutions/devopSolutions'
import DevopsDevelopment from '../components/devopsSolutions/devopsDevelopment'
import DevelopmentProcess from '../components/customSoftware/developmentProcess'

const page = () => {
  return (
    <div>
      <DevopsSolutionsLanding/>
      <BenefitsOfDevOps/>
     <DevelopmentProcess/>
      <DevopsDevelopment/>
      <DevopSolutions/>

    </div>
  )
}

export default page