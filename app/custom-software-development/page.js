import React from 'react'
import CustomSoftwareLanding from '../components/customSoftware/customSoftwareLanding'
import CustomSoftwareSolution from '../components/customSoftware/customSoftwareSolution'
import DevelopmentProcess from '../components/customSoftware/developmentProcess'
import TransformBusinessCustom from '../components/customSoftware/transformBusinessCustom'

const page = () => {
  return (
    <div>
      <CustomSoftwareLanding/>
      <CustomSoftwareSolution/>
      <DevelopmentProcess/>
      <TransformBusinessCustom/>
    </div>
  )
}

export default page
