import React from 'react'

const TextAnalyticsLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full  py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-6 pb-4 rounded-2xl text-gray-800 z-20 -mr-28 md:-mr-32 self-end">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Transforming Caregiver Communication with Text Analytics
          </h2>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
          Communication is vital in caregiving, but often challenging. The Text Analytics Project uses technologies like NLP and sentiment analysis to turn conversations into insights, enhancing engagement and service quality.

          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/CaseStudies/textt.jpg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default TextAnalyticsLanding
