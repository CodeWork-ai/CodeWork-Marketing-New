import React from 'react'
import Image from 'next/image'

const DevopSolutions = () => (
  <section className="
    flex flex-col-reverse md:flex-row items-center justify-between
    bg-gradient-to-r from-[#eef3ff] to-[#f8fafd]
    py-16 pl-12 overflow-hidden
  ">
    {/* Text Column */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h3 className="text-4xl md:text-5xl font-bold text-[#1b2142] mb-4">
       Transform Software Development with DevOps
      </h3>
      <p className="text-lg text-[#3b4368] mb-8 leading-relaxed">
        Adopting DevOps solutions enables automated workflows, cloud-native applications, and seamless deployments. Codework specializes in scalable, secure, high-performance DevOps strategies tailored to business needs. Explore cutting-edge DevOps consulting and implementation services to enhance operational efficiency.
      </p>
    </div>

    {/* Image Column with clipped curve on left */}
    <div>
      <Image
        src="/AllServices/DevOps.svg"
        alt="AI model training illustration"
        width={800}
        height={600}
        className="w-[500px] h-[600px] block"
      />
    </div>
  </section>
)

export default DevopSolutions
