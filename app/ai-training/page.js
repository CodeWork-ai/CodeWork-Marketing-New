import React from 'react'
import CourseContent from '../components/aiTraining/CourseContent'
import PricingAndContact from '../components/aiTraining/PricingAndContact'
import HeroAndWelcome from '../components/aiTraining/HeroAndWelcome '

const AITrainingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <HeroAndWelcome />
      <CourseContent />
      <PricingAndContact />
    </div>
  )
}

export default AITrainingPage
