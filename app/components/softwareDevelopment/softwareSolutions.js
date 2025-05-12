import React from 'react'
import Image from 'next/image'

const SoftwareSolutions = () => (
  <section className="
    flex flex-col-reverse md:flex-row items-center justify-between
    bg-gradient-to-r from-[#eef3ff] to-[#f8fafd]
    py-16 pl-12 overflow-hidden
  ">
    {/* Text Column */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1b2142] mb-4">
        Empowering Businesses with Innovative Software Solutions
      </h1>
      <p className="text-lg text-[#3b4368] mb-8 leading-relaxed">
        High-performing software solutions drive business growth and digital transformation. Codework.ai leverages technology expertise to build applications that enhance operational efficiency and deliver seamless user experiences. Explore software development services at Codework and unlock the potential of technology-driven solutions.
      </p>
    </div>

    {/* Image Column with clipped curve on left */}
    <div>
      <Image
        src="/AllServices/Software.svg"
        alt="AI model training illustration"
        width={800}
        height={600}
        className="w-[500px] h-[600px] block"
      />
    </div>
  </section>
)

export default SoftwareSolutions
