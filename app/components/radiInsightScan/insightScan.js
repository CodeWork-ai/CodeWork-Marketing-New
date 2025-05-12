import React from 'react'
function InsightScan() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
      Challenges Patients Face

      </h2>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
  Deciphering medical reports can often be an overwhelming experience for patients. The use of technical and intricate medical terms can lead to:
</p>
<ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
  <li>
    <span className="font-medium">Confusion about their health and diagnosis</span>
  </li>
  <li>
    <span className="font-medium">A sense of disconnection from their healthcare journey</span>
  </li>
  <li>
    <span className="font-medium">Rising stress and anxiety</span>
  </li>
</ul>


      {/* Illustration */}
       <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/scans.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/scans2.jpg"
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
              <span className="font-medium">Simple language that patients can grasp without needing a medical degree
              </span> 
            </li>
            <li>
              <span className="font-medium">Illustrative diagrams that simplify complex concepts
              </span> 
            </li>
            <li>
              <span className="font-medium">Language support for diverse patient populations
              </span> 
            </li>
            <li>
              <span className="font-medium">Contextual definitions to ensure clarity

              </span> 
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          The Impact          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Translates medical jargon with impressive accuracy
              </span>
            </li>
            <li>
              <span className="font-medium">Overcomes communication barriers by offering multilingual support
              </span> 
            </li>
            <li>
              <span className="font-medium">Improves comprehension through the power of visuals
              </span> 
            </li>
            <li>
              <span className="font-medium">Encourages patients to make confident and informed choices about their care
              </span> 
            </li>
            <li>
              <span className="font-medium">Facilitates meaningful conversations between patients and healthcare professionals
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default InsightScan
