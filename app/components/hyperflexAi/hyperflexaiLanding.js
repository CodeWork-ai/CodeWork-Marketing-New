import React from 'react'

const HyperflexaiLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full py-12 sm:py-16 md:py-24 lg:py-36 pt-20 sm:pt-16 md:pt-24 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Card with Gradient - Reduced size for laptop */}
          <div className="w-full lg:w-4/12 xl:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-4 sm:p-6 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl text-gray-800 z-20 
                         lg:-mr-20 xl:-mr-32 
                         order-2 lg:order-1 lg:self-end
                         shadow-md lg:shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-4 xl:mb-6 leading-tight">
              AI-Powered Search Engine for Education
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-lg 
                          w-full sm:w-[95%] lg:w-[95%] xl:w-[85%] 
                          leading-relaxed text-gray-700">
              Hyperflx.AI is a search engine focused on academic research. It simplifies learning by delivering organized, accurate, and relevant educational information.
            </p>
          </div>

          {/* Full-cover Image - Reduced size for laptop */}
          <div className="w-full lg:w-5/12 xl:w-1/2 
                         h-64 sm:h-80 md:h-96 lg:h-[320px] xl:h-[500px] 
                         overflow-hidden rounded-xl sm:rounded-2xl 
                         shadow-lg lg:shadow-xl z-10 
                         order-1 lg:order-2">
            <img
              src="/CaseStudies/hyperflex.jpg"
              alt="Hyperflx AI search engine interface"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HyperflexaiLanding
