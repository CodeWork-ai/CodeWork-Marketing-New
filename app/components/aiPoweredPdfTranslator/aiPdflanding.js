import React from 'react'

const AiPdflanding = () => {
  return (
    <section className="bg-gradient-to-b w-full  py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-6 pb-4 rounded-2xl text-gray-800 z-20 -mr-28 md:-mr-32 self-end">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
          AI-Powered PDF Translator          </h1>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
          The AI-powered PDF Translator is an advanced AI-driven solution that translates PDF content into multiple languages, including Tamil, Hindi, Malayalam, Telugu, and Kannada. This innovative tool ensures accurate translations while preserving the original document’s structure, making it an essential asset for businesses, researchers, and professionals worldwide.

          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/CaseStudies/AI-Powered.jpg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AiPdflanding
