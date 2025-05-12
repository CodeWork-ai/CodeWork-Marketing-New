import React from 'react'

const ColowatchLanding = () => {
  return (
    <section className="bg-gradient-to-b w-full  py-36">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Card with Gradient */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] p-6 pb-4 rounded-2xl text-gray-800 z-20 -mr-28 md:-mr-32 self-end">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
          AI & 3D Modeling for Colon Cancer Detection
          </h2>
          <p className="text-sm md:text-base w-[90%] leading-relaxed">
          The healthcare industry struggles with early colon cancer detection due to invasive, costly procedures like colonoscopies, leading to low compliance and delayed diagnoses.
🔹 35% of patients avoid colonoscopies due to discomfort and cost.
🔹 60% of cases are diagnosed late, reducing survival rates.
🔹15-20% error margin in traditional screening leads to misdiagnoses.
 Colowatch offers a non-invasive, AI-driven solution that enhances detection accuracy, affordability, and patient comfort.

          </p>
        </div>

        {/* Full-cover Image */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden rounded-2xl shadow-lg z-10">
          <img
            src="/CaseStudies/colon.jpg"
            alt="YourBank team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ColowatchLanding
