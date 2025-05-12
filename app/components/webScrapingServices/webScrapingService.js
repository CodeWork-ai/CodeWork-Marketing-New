import React from 'react'
function WebScrapingService() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
      Our service helps you
      </h2>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
  Our service helps you in the following ways:
</p>
<ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
  <li>
    <span className="font-medium">Automatically extract data from any website.</span> 
  </li>
  <li>
    <span className="font-medium">Obtain data in easily readable formats, such as spreadsheets.</span> 
  </li>
  <li>
    <span className="font-medium">Track what your competitors are doing.</span>
  </li>
  <li>
    <span className="font-medium">Find new business leads</span>
  </li>
  <li>
    <span className="font-medium">Understand market trends</span> 
  </li>
</ul>

      {/* Illustration */}
      <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/webscrapings.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/scraping2.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>


      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          How It Works
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Discuss exactly what information you want
              </span> 
            </li>
            <li>
              <span className="font-medium">Build a custom tool to collect that specific data
              </span>
            </li>
            <li>
              <span className="font-medium">Establish regular times for collection.
              </span> 
            </li>
            <li>
              <span className="font-medium">Deliver the information directly.

              </span> 
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          Why It's Helpful
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Reduce the amount of time spent on manual research
              </span> 
            </li>
            <li>
              <span className="font-medium">Obtain up-to-date, precise information
              </span>
            </li>
            <li>
              <span className="font-medium">Make smarter business decisions
              </span> 
            </li>
            <li>
              <span className="font-medium">Stay ahead of your competition
              </span> 
            </li>
          </ul>
          <p className='pt-7 text-gray-600'>
          Hyperflx.AI is reshaping academic research by making it faster and easier to understand. With features like personalized recommendations and real-time help, it’s well-positioned to attract students, educators, and researchers looking for smarter learning tools.
          </p>
        </div>
      </div>

    </div>
  )
}

export default WebScrapingService
