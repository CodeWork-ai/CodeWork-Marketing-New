import React from 'react'
import ItStaffAugmentation from '../components/itStaffService/itStaffAugmentation'
import ItStaffServiceLanding from '../components/itStaffService/itStaffServiceLanding'
import ItStaffProcess from '../components/itStaffService/iTStaffProcess'
import EnhancingBusinessSuccess from '../components/itStaffService/enhancingBusinessSuccess'

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
