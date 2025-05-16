"use client"
import React, { useEffect, useState } from 'react'
import PenetrationTestingCycle from './penetrationTestingCycle'

const steps = [
  {
    title: 'Reconnaissance & Threat Mapping',
    description:
      'Potential entry points and exploitable vulnerabilities are identified through cyber risk assessments.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Exploitation & Attack Simulation',
    description:
      'Real-world cyberattacks are encouraged to test the effectiveness of security defenses.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Post-Exploitation Analysis',
    description:
      'The impact of security breaches on sensitive data and business operations is evaluated.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Comprehensive Security Reporting & Risk Mitigation',
    description:
      'Detailed security reports provide actionable recommendations for addressing vulnerabilities.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Remediation Support & Retesting',
    description:
      'Guidance on fixing vulnerabilities is provided, followed by retesting to validate security enhancements',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
]

const PenetrationTestingProcess = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const indentTitles = ['Model Training and Evaluation', 'Deployment and Optimization']

  return (
    <div className="p-20 bg-gradient-to-b from-[#fffdf2] to-[#ebf9ff]">
      <h2 className="text-4xl font-bold text-black mb-6">
       Comprehensive Penetration Testing Services
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
          <PenetrationTestingCycle/>
        </div>
      </div>
    </div>
  )
}

export default PenetrationTestingProcess