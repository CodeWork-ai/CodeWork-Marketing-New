"use client"
import React, { useEffect, useState } from 'react'
import DevopsSolutionCycle from './devopsSolutionCycle'

const steps = [
  {
    title: 'Assess & Plan',
    description:
      'Identify business objectives, analyze bottlenecks, and create a DevOps roadmap.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Automate & Integrate',
    description:
      'Implement CI/CD, cloud provisioning, and security automation tools.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Deploy & Monitor',
    description:
      'Enable real-time tracking, seamless deployment, and issue resolution.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Optimize & Scale',
    description:
      'Continuously improve workflows for efficiency and agility.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },

]

const DevopsSolutionProcess = () => {
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
      DevOps Implementation Approach
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
          <DevopsSolutionCycle/>
        </div>
      </div>
    </div>
  )
}

export default DevopsSolutionProcess