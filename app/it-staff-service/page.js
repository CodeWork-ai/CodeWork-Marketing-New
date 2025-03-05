import React from 'react'
import ItStaffAugmentation from '../components/itStaffService/itStaffAugmentation'
import ItStaffServiceLanding from '../components/itStaffService/itStaffServiceLanding'
import EnhancingBusinessSuccess from '../components/itStaffService/enhancingBusinessSuccess'
import ItStaffProcess from '../components/itStaffService/itStaffProcess'

const page = () => {
  return (
    <div>
        <ItStaffServiceLanding/>
      <ItStaffAugmentation/>
      <ItStaffProcess/>
      <EnhancingBusinessSuccess/>
    </div>
  )
}

export default page
