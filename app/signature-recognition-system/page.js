import React from 'react'
import SignatureRecognitionLanding from '../components/signatureRecognitionSystem/signatureRecognitionLanding'
import SignatureOverView from '../components/signatureRecognitionSystem/signatureOverview'

const page = () => {
  return (
    <div>
        <SignatureRecognitionLanding/>
        <SignatureOverView/>
    </div>
  )
}

export default page