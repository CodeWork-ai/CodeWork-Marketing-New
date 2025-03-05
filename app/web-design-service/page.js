import React from 'react'
import WebDesignLanding from '../components/webDesignService/webDesignLanding'
import WebDesignProcess from '../components/webDesignService/webDesignProcess'
import BenefitsProfessionalWebDesign from '../components/webDesignService/benefitsProfessionalWebDesign'
import ElevateWebDesign from '../components/webDesignService/elevateWebDesign'
const page = () => {
  return (
    <div>
      <WebDesignLanding/>
      <BenefitsProfessionalWebDesign/>
      <WebDesignProcess/>
      <ElevateWebDesign/>
    </div>
  )
}

export default page
