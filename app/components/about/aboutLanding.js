import React from 'react'

const AboutLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full from-[#EBF9FF] to-[#FBF8E6] py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-purple-400 to-blue-300 p-6 pb-4 rounded-2xl text-white z-20 -mr-28 md:-mr-32 self-end">
          <h2 className="text-3xl md:text-3xl font-semibold mb-3">
            Who We Are: Shaping Tomorrow with AI-Powered Technology
          </h2>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
           We are a technology-driven company leveraging cutting-edge AI technology to transform businesses and drive success. Our team combines advanced AI tools, industry expertise, and a human-first approach to deliver results that matter. From startups to enterprises, we partner with businesses to unlock their full potential using AI and emerging technologies.
           
          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/aboutLanding.svg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutLanding
