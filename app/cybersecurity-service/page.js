import React from 'react'
import CybersecurityServiceLanding from '../components/cybersecurityService/cybersecurityServiceLanding'
import WhyCybersecurity from '../components/cybersecurityService/whyCybersecurity'
import CybersecurityService from '../components/cybersecurityService/cybersecurityService'
import CybersecurityProcess from '../components/cybersecurityService/cybersecurityProcess'
import CybersecuritySolutions from '../components/cybersecurityService/cybersecuritySolutions'

const page = () => {
  return (
    <div>
        <CybersecurityServiceLanding/>
        <WhyCybersecurity/>
        <CybersecurityService/>
        <CybersecurityProcess/>
        <CybersecuritySolutions/>
    </div>
  )
}

export default page