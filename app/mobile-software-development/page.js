import React from 'react'
import MobileDevelopmentLanding from '../components/mobileDevelopment/mobileDevelopmentLanding'
import MobileAppDevelopment from '../components/mobileDevelopment/mobileAppDevelopment'
import MobileAppProcess from '../components/mobileDevelopment/mobileAppProcess'
import MobileSolutions from '../components/mobileDevelopment/mobileSolutions'

const page = () => {
  return (
    <div>
        <MobileDevelopmentLanding/>
        <MobileAppDevelopment/>
        <MobileAppProcess/>
        <MobileSolutions/>
    </div>
  )
}

export default page