import React from 'react'
import WebDesignLanding from '@/app/components/webDesignService/webDesignLanding'
import WebDesignProcess from '@/app//components/webDesignService/webDesignProcess'
import ElevateWebDesign from '@/app/components/webDesignService/elevateWebDesign'
import BenefitsProfessionalWebDesign from '@/app/components/webDesignService/BenefitsProfessionalWebDesign'



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
