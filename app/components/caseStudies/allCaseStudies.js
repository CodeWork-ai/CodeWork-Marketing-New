"use client";
import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered PDF Translator',
    description:
      'Revolutionizing Multilingual Document Processing.',
    imageUrl: '/CaseStudies/AI-Poweredpdf.jpg',
    link: '/ai-powered-pdf-translator',
  },
  
  {
    id: 2,
    title: 'Web Scraping',
    description: 'Get the Data Your Business Needs.',
    imageUrl: '/CaseStudies/webscrapingh.jpg',
    link: '/web-scraping-services',
  },
  {
    id: 3,
    title: 'Text Analytics',
    description: 'Transforming Caregiver Communication with Text Analytics.',
    imageUrl: '/CaseStudies/textanla.jpg',
    link: '/text-analytics',
  },
  {
    id: 4,
    title: 'Radi Insight Scan',
    description: 'Making Medical Reports More Accessible.',
    imageUrl: '/CaseStudies/scans.jpg',
    link: '/radi-insight-scan',
  },
  {
    id: 5,
    title: 'Signature Recognition System',
    description: 'Advanced Handwritten Signature Recognition System.',
    imageUrl: '/CaseStudies/signaturess.jpg',
    link: '/signature-recognition-system',
  },
];

const AllCaseStudies = () => {
  const [showAll, setShowAll] = useState(false);

  // decide how many to render
  const visibleStudies = showAll ? caseStudies : caseStudies.slice(0, 4);

  return (
    <div className="bg-gradient-to-br from-[#FBF8E6] to-[#f5fdff] mx-auto px-4 sm:px-6 md:px-24 py-12 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-20">
        {visibleStudies.map(({ id, title, description, imageUrl, link }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
              <a
                href={link}
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 sm:px-6 sm:py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default AllCaseStudies;