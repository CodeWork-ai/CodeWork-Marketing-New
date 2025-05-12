import React from 'react'
import Image from 'next/image'

const BusinessWithCustom = () => (
  <section className="
    flex flex-col-reverse md:flex-row items-center justify-between
    bg-gradient-to-r from-[#eef3ff] to-[#f8fafd]
    py-16 pl-12 overflow-hidden
  ">
    {/* Text Column */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1b2142] mb-4">
       Transform Business with Custom Software
      </h1>
      <p className="text-lg text-[#3b4368] mb-8 leading-relaxed">
        Explore tailored software solutions with Codework to drive efficiency and growth. 
Contact us today for a consultation.

      </p>
    </div>

    {/* Image Column with clipped curve on left */}
    <div>
      <Image
        src="/AllServices/CustomSoftware.svg"
        alt="AI model training illustration"
        width={800}
        height={600}
        className="w-[500px] h-[600px] block"
      />
    </div>
  </section>
)

export default BusinessWithCustom
