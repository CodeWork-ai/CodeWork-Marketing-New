import React from 'react'
function Hyperflexai() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
  Challenges in Academic Research
</h2>
<p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
  Finding reliable academic resources can be tough because:
</p>
<ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
  <li>
    <span className="font-medium">Search engines often give scattered, unfiltered information.</span> 
  </li>
  <li>
    <span className="font-medium">It’s hard to tell which sources are trustworthy.</span> 
  </li>
  <li>
    <span className="font-medium">There’s a lack of helpful visuals like diagrams or videos to explain concepts.</span>
  </li>
  <li>
    <span className="font-medium">Academic terms are often complex and lack quick, clear definitions.</span>
  </li>
</ul>

      {/* Illustration */}
      <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/hyperfleex.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/hyperflx2.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>

      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          How Hyperflx.AI Solves These Problems
          </h3>
          <p className='text-gray-600 pt-7'>Hyperflx.AI tackles these challenges by:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Organizing Results: Ranking and filtering high-quality academic content.
              </span> 
            </li>
            <li>
              <span className="font-medium">Reliable Sources: Aggregating research from trusted places like Google Scholar, NASA, IBM, and top universities.
              </span> 
            </li>
            <li>
              <span className="font-medium">Visual Learning: Providing curated educational images and videos to explain ideas better.
              </span> 
            </li>
            <li>
              <span className="font-medium">Quick Definitions: Offering precise, simple explanations for academic terms.
              </span> 
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Key Features
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Accurate Searches: Finds precise and dependable academic information.
              </span>
            </li>
            <li>
              <span className="font-medium">Structured Content: Arrange research materials in an easy-to-use format.
              </span> 
            </li>
            <li>
              <span className="font-medium">Text Summaries: Simplifies concepts with helpful summaries.
              </span> 
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Hyperflexai
