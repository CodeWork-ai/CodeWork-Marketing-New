import React from 'react'
function ColowatchStudies() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
  Challenges in Colon 
  &amp; Cancer Screening
</h2>
<p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
  Below are some of the key challenges:
</p>
<ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
  <li>
    <span className="font-medium">Invasive Screening</span> 
  </li>
  <li>
    <span className="font-medium">Late Diagnosis</span> 
  </li>
  <li>
    <span className="font-medium">False Positives &amp; Negatives</span>
  </li>
  <li>
    <span className="font-medium">Limited Access</span>
  </li>
  <li>
    <span className="font-medium">High Costs</span>
  </li>
</ul>


      {/* Illustration */}
     <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/colonScan.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/colon2.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>

      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          Future of AI in Healthcare
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">AI Diagnostics Growth – Growing at 45% annually, improving medical accuracy.
              </span>
            </li>
            <li>
              <span className="font-medium"> Non-Invasive Screening Compliance – Increased by 50%, leading to earlier detection.
              </span> 
            </li>
            <li>
              <span className="font-medium">  Cost-Effective AI Solutions – Reduces healthcare costs by 40%, making screening accessible.
              </span>
            </li>
            <li>
              <span className="font-medium">  Personalized Treatment – AI-driven diagnostics enhance treatment effectiveness by 30%.

              </span>
            </li>
            <li>
              <span className="font-medium">   Colowatch is transforming colon cancer detection, ensuring early diagnosis, better patient outcomes, and a future driven by AI-powered healthcare.
              </span>
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
          AI-Driven Early Detection
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium"> 3D Intestine Modeling – Converts CT scans into high-resolution 3D models, improving accuracy by 30%.
              </span>
            </li>
            <li>
              <span className="font-medium">Contextual Understanding</span> 
            </li>
            <li>
              <span className="font-medium">AI-Powered Detection – Identifies anomalies with 90%+ accuracy, reducing misdiagnoses.
              </span> 
            </li>
            <li>
              <span className="font-medium">Machine Learning – Analyzes millions of records, cutting false positives/negatives by 25%.
              </span>
            </li>
            <li>
              <span className="font-medium">Interactive Clinician Tools – Enhances diagnostic confidence by 35%.
              </span> 
            </li>
            <li>
              <span className="font-medium">Early Detection Advantage – Increases 5-year survival rates from 14% (late-stage) to 90%+ (early-stage).
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default ColowatchStudies
