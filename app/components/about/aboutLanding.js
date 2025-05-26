import React from 'react'

const AboutLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full from-[#EBF9FF] to-[#FBF8E6] py-16 md:py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 px-2 md:px-4 md:pl-28 lg:pl-28 xl:pl-32">
        {/* Text Card with Gradient */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-purple-400 to-blue-300 p-4 md:p-6 pb-4 rounded-2xl text-white z-20 -mr-0 md:-mr-32 self-end md:self-end">
          <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-3">
            Who We Are: Shaping Tomorrow with AI-Powered Technology
          </h2>
          <p className="text-xs md:text-base w-full md:w-[90%] leading-relaxed">
            We are a technology-driven company leveraging cutting-edge AI technology to transform businesses and drive success. Our team combines advanced AI tools, industry expertise, and a human-first approach to deliver results that matter. From startups to enterprises, we partner with businesses to unlock their full potential using AI and emerging technologies.
          </p>
        </div>

        {/* Full-cover Image */}
        <div className="w-full md:w-[58%] h-48 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
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
