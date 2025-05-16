"use client"
import React, { useEffect, useState } from 'react'
import MobileAppProcessCycle from './mobileAppProcessCycle'

const steps = [
  {
    title: 'Strategy and Planning',
    description:
   'Define business objectives and determine the apps technical framework.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'UI/UX Design',
    description:
      'Create visually appealing and user-friendly app interfaces.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Agile Development',
    description:
      'Develop secure, reliable, and high-performing applications.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Testing and Quality Assurance',
    description:
      'Ensure seamless functionality across all devices.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Deployment & Launch',
    description:
      'Releasing apps on platforms like Google Play and the App Store to make them accessible to users.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Continuous Support',
    description:
      'Check how the app works, fix any problems, and add new features to improve it for users.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
]

const MobileAppProcess = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const indentTitles = ['Model Training and Evaluation', 'Deployment and Optimization']

  return (
    <div className="p-20 bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff]">
      <h2 className="text-4xl font-bold text-black mb-6">
       Streamlined Mobile App Development Process
      </h2>
      <div className="flex flex-col  pt-24 md:flex-row gap-8">
        {/* Left Section: Sliding Steps */}
        <div className="flex-1">
          <div
            className="relative overflow-hidden"
            style={{
              width: steps[0].width,
              height: steps[0].height,
            }}
          >
            {steps.map((step, idx) => {
              const needsIndent = indentTitles.includes(step.title)
              return (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                    idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    backgroundImage: step.bgImage ? `url(${step.bgImage})` : undefined,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                  }}
                >
                  <div className={`p-7 ${needsIndent ? 'pl-16' : ''}`}>
                    <h3 className="text-2xl w-3/4 text-gray-800 font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 w-3/4">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Right Section: Software Process Cycle */}
        <div className="flex-1 space-y-4 mt-5 md:mt-0">
          <MobileAppProcessCycle/>
        </div>
      </div>
    </div>
  )
}

export default MobileAppProcess