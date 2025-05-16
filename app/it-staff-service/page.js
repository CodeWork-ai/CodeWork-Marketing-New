import React from 'react'
import ItStaffLanding from '../components/itStaffService/itStaffLanding'
import ItStaff from '../components/itStaffService/itStaff'
import ITStaffAugmentation from '../components/itStaffService/iTStaffAugmentation'
import ItStaffConclusion from '../components/itStaffService/itStaffConclusion'

const page = () => {
  return (
    <div>
      <ItStaffLanding/>
      <ItStaff/>
      <ITStaffAugmentation/>
      <ItStaffConclusion/>
    </div>
  )
}

export default page
