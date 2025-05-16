import React from 'react'
import CaseStudiesLanding from '../components/caseStudies/caseStudiesLanding'
import OurCompany from '../components/caseStudies/ourCompany'
import AllCaseStudies from '../components/caseStudies/allCaseStudies'

const page = () => {
  return (
    <div>
      <CaseStudiesLanding/>
      <OurCompany/>
      <AllCaseStudies/>
    </div>
  )
}

export default page