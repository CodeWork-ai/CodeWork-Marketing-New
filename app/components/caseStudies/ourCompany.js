import React from 'react';

const OurCompany = () => {
  return (
    <section className="bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF]  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Intro + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-16">
          <p className="text-lg leading-relaxed text-gray-700">
            With Codework, adopting technology means embracing innovation with a personal touch. Commitment to excellence ensures that every project is delivered with precision and care, making us a trusted partner in the digital journey.
          </p>
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/CaseStudies/caseStudy.svg"     
            alt="Team working on laptop"
          />
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800  mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Market Saturation</li>
            <li>Technological Disruption</li>
            <li>Internal Operational Inefficiencies</li>
          </ul>
        </div>

        {/* Strategic Response */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Strategic Response</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Market Diversification</li>
            <li>Adopting Cutting-Edge Technology</li>
            <li>Operational Efficiency Improvements</li>
          </ul>
        </div>

        {/* Result */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Result</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Market Share</h3>
            <p className="text-gray-700">
              The company regained and even expanded its market share by capturing new customer segments and entering new markets.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Growth</h3>
            <p className="text-gray-700">
              Diversification and technological innovation resulted in a 35% increase in annual revenue within six months.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Excellence</h3>
            <p className="text-gray-700">
              Enhanced operational efficiencies translated into a 20% reduction in operational costs and improved profit margins.
            </p> <br/>
            <p className='text-gray-700'>Codework (P) Ltd. turned big challenges into opportunities by staying flexible, thinking strategically, and using innovation. By accepting change and solving problems early, the company avoided setbacks and set itself up for long-term success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
