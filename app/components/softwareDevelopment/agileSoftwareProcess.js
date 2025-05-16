"use client"
import React, { useEffect, useState } from 'react'
import SoftwareCycle from './softwareCycle'

const steps = [
  {
    title: 'Requirement Analysis',
    description:
      'In-depth understanding of business needs and software objectives.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'UI/UX Design',
    description:
      'Intuitive, user-friendly interface design for enhanced user engagement. ',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Agile Development',
    description:
      'It involves contemporary frameworks for iterative processes, enabling swift and efficient deployment.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Testing & Quality Assurance',
    description:
      'Comprehensive testing ensures bug-free, high-performance software.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Deployment & Support',
    description:
      'Seamless software launch with ongoing updates and optimization.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
]

const AgileSoftwareProcess = () => {
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
       Agile Software Development Process
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
          <SoftwareCycle />
        </div>
      </div>
    </div>
  )
}

export default AgileSoftwareProcess