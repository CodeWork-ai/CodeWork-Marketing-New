import React from 'react'
import CybersecurityServiceLanding from '../components/cybersecurityService/cybersecurityServiceLanding'
import CybersecurityEssential from '../components/cybersecurityService/cybersecurityEssential'
import CybersecurityApproach from '../components/cybersecurityService/cybersecurityApproach'
import CybersecuritySolution from '../components/cybersecurityService/cybersecuritySolution'

const page = () => {
  return (
    <div>
      <CybersecurityServiceLanding/>
      <CybersecurityEssential/>
      <CybersecurityApproach/>
      <CybersecuritySolution/>
    </div>
  )
}

export default page
