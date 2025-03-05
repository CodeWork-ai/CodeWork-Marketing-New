import React from 'react'
import AiModalLanding from '../components/aiModalTraining/aiModalLanding'
import AiModalProcess from '../components/aiModalTraining/aiModalProcess'
import AiModalStart from '../components/aiModalTraining/aiModalStart'

const page = () => {
  return (
    <div>
      <AiModalLanding/>
      <AiModalProcess/>
      <AiModalStart/>
    </div>
  )
}

export default page
