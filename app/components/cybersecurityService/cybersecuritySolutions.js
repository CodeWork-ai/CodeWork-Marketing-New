import React from 'react'
import Image from 'next/image'

const CybersecuritySolutions = () => (
  <section className="
    flex flex-col-reverse md:flex-row items-center justify-between
    bg-gradient-to-r from-[#eef3ff] to-[#f8fafd]
    py-16 pl-12 overflow-hidden
  ">
    {/* Text Column */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1b2142] mb-4">
       Future-Proof Cybersecurity Solutions
      </h1>
      <p className="text-lg text-[#3b4368] mb-8 leading-relaxed">
       Cyber threats are constantly evolving, making advanced cybersecurity solutions a necessity. Codework.ai delivers proactive security strategies to keep businesses protected, compliant, and resilient in the face of cyber risks.
 
Explore tailored cybersecurity solutions today and strengthen digital security against evolving threats.

      </p>
    </div>

    {/* Image Column with clipped curve on left */}
    <div>
      <Image
        src="/AllServices/Cybersecurity.svg"
        alt="AI model training illustration"
        width={800}
        height={600}
        className="w-[500px] h-[600px] block"
      />
    </div>
  </section>
)

export default CybersecuritySolutions
