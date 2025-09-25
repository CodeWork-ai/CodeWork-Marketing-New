import React from 'react'
import AnnotationLanding from '../components/annotationServices/annotationLanding'
import AnnotationSolution from '../components/annotationServices/annotationSolution'
import AnnotationServicesOffered from '../components/annotationServices/annotationServicesOffered'

const page = () => {
  return (
    <div>
      <AnnotationLanding />
        <AnnotationServicesOffered />
      <AnnotationSolution />
    
    </div>
  )
}

export default page
