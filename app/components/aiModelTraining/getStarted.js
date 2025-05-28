import React from 'react'
import Image from 'next/image'

const GetStarted = () => (
  <section className="
    flex flex-col-reverse md:flex-row items-center justify-between
    bg-gradient-to-r from-[#eef3ff] to-[#f8fafd]
    py-16 pl-12 overflow-hidden
  ">
    {/* Text Column */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h2 className="text-4xl md:text-4xl font-semi-bold text-[#1b2142] mb-4">
        Get Started with AI Model Training Today
      </h2>
      <p className="text-lg text-[#3b4368] mb-8 leading-relaxed">
        Enhance your business operations with AI-powered solutions. Let Codework help you build and deploy
        AI models that drive innovation and efficiency. Contact us today to discuss your AI requirements and
        take the next step in digital transformation.
      </p>
    </div>

    {/* Image Column with clipped curve on left */}
    <div>
      <Image
        src="/AllServices/servicesModel.svg"
        alt="AI model training illustration"
        width={800}
        height={600}
        className="w-[500px] h-[600px] block"
      />
    </div>
  </section>
)

export default GetStarted
