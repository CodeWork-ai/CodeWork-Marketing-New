import React from 'react'
function PdfTranslator() {
  return (
    <div className="container mx-auto px-16 py-12">
      {/* Top headline + intro */}
      <h2 className="text-3xl font-bold text-gray-800">
        Market Impact &amp; Growing Demand
      </h2>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
        The use of translation technology is growing fast. Around 36% of users (16–24) use online translators weekly, and 3.2% of Indian websites integrate them. The document translation market, worth $10.3 B in 2023, may reach $16.1 B by 2030 (CAGR 13.08%), showing rising demand for AI-powered solutions.
      </p>

      {/* Illustration */}
      <div className="mt-8 flex space-x-36">
  <img
    src="/CaseStudies/pdftranslated.jpg"
    alt="Person translating a PDF on their laptop"
    className="w-[400px] h-[300px]"
  />
  <img
    src="/CaseStudies/aipdf.jpg"
    alt="Description of the second image"
    className="w-[400px] h-[300px]"
  />
</div>


      {/* Two-column feature blocks */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Strategic Response */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Strategic Response
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Accuracy &amp; Speed</span> &rarr; Reduces errors and saves time
            </li>
            <li>
              <span className="font-medium">Formatting Retained</span> &rarr; Maintains structure and alignment
            </li>
            <li>
              <span className="font-medium">Wider Accessibility</span> &rarr; Supports multiple languages
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
              <span className="font-medium">Instant PDF Translation</span> &rarr; Quick multilingual translation
            </li>
            <li>
              <span className="font-medium">Contextual Understanding</span> &rarr; AI-driven accurate translation
            </li>
            <li>
              <span className="font-medium">Preserved Formatting</span> &rarr; Maintains original document layout
            </li>
            <li>
              <span className="font-medium">Downloadable Translations</span> &rarr; Instant translated document access
            </li>
            <li>
              <span className="font-medium">Seamless Integration</span> &rarr; Compatible with existing systems
            </li>
            <li>
              <span className="font-medium">Robust Error Handling</span> &rarr; Smooth processing without data loss
            </li>
          </ul>
        </div>
      </div>

      {/* Full-width Problem-Solving section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">
          Problem-Solving &amp; Benefits
        </h3>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
          <li>Eliminates manual translation efforts while preserving document formatting.</li>
          <li>Enhances accessibility by bridging language barriers in critical sectors.</li>
          <li>Ensures efficiency through automated, AI-driven translation with minimal errors.</li>
          <li>Supports data security, ensuring confidential documents remain protected.</li>
        </ul>
        <p className='text-gray-600 pt-9'>The AI-powered PDF Translator is a vital tool for seamless, accurate, and efficient multilingual document processing, driving global communication and inclusivity across industries.</p>
      </div>
    </div>
  )
}

export default PdfTranslator
