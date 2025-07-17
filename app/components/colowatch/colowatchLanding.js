import React from 'react'

const ColowatchLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full py-12 sm:py-16 md:py-24 lg:py-36 pt-20 sm:pt-16 md:pt-24 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Card with Gradient - Further reduced size for laptop */}
          <div className="w-full lg:w-1/4 xl:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-4 sm:p-6 lg:p-4 xl:p-8 rounded-xl sm:rounded-2xl text-gray-800 z-20 
                         lg:-mr-16 xl:-mr-32 
                         order-2 lg:order-1 lg:self-end
                         shadow-md lg:shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-3 xl:mb-6 leading-tight">
              AI & 3D Modeling for Colon Cancer Detection
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-lg 
                          w-full sm:w-[95%] lg:w-full xl:w-[85%] 
                          leading-relaxed text-gray-700 space-y-2 lg:space-y-1 xl:space-y-3">
              <p>
                The healthcare industry struggles with early colon cancer detection due to invasive, costly procedures like colonoscopies, leading to low compliance and delayed diagnoses.
              </p>
              
              <div className="space-y-1 lg:space-y-0.5 xl:space-y-2 my-3 lg:my-2 xl:my-4">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold text-base lg:text-sm xl:text-lg mt-1">•</span>
                  <span>35% of patients avoid colonoscopies due to discomfort and cost.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold text-base lg:text-sm xl:text-lg mt-1">•</span>
                  <span>60% of cases are diagnosed late, reducing survival rates.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold text-base lg:text-sm xl:text-lg mt-1">•</span>
                  <span>15-20% error margin in traditional screening leads to misdiagnoses.</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Full-cover Image - Adjusted for more compact layout */}
          <div className="w-full lg:w-3/4 xl:w-1/2 
                         h-64 sm:h-80 md:h-96 lg:h-[320px] xl:h-[500px] 
                         overflow-hidden rounded-xl sm:rounded-2xl 
                         shadow-lg lg:shadow-xl z-10 
                         order-1 lg:order-2">
            <img
              src="/CaseStudies/colon.jpg"
              alt="Colowatch AI colon cancer detection technology interface"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColowatchLanding
