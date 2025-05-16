import React from 'react'

const HyperflexaiLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full  py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-6 pb-4 rounded-2xl text-gray-800 z-20 -mr-28 md:-mr-32 self-end">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
          AI-Powered Search Engine for Education
          </h2>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
          Hyperflx.AI is a search engine focused on academic research. It simplifies learning by delivering organized, accurate, and relevant educational information.
          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/CaseStudies/hyperflex.jpg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HyperflexaiLanding
