import React from 'react'
import ItStaffLanding from '../components/itStaffService/itStaffLanding'
import ItStaff from '../components/itStaffService/itStaff'
import ItStaffConclusion from '../components/itStaffService/itStaffConclusion'
import ItStaffAugmentation from '../components/itStaffService/itStaffAugmentation'



const page = () => {
  return (
    <div>
      <ItStaffLanding/>
      <ItStaff/>
      <ItStaffAugmentation/>
      <ItStaffConclusion/>
    </div>
  )
}

export default page
