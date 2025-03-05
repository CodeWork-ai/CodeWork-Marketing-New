import React from 'react'
import MobileSoftwareLanding from '../components/mobileSoftwareDevelopment/mobileSoftwareLanding'
import MobileAppDevelopment from '../components/mobileSoftwareDevelopment/mobileAppDevelopment'
import MobileAppProcess from '../components/mobileSoftwareDevelopment/mobileAppProcess'
import MobileAppCycle from '../components/mobileSoftwareDevelopment/mobileAppCycle'
import MobileSolution from '../components/mobileSoftwareDevelopment/mobileSolution'

const page = () => {
  return (
    <div>
      <MobileSoftwareLanding/>
      <MobileAppDevelopment/>
      <MobileAppProcess/>
      <MobileSolution/>
    </div>
  )
}

export default page
