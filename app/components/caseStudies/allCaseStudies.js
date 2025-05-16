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
    title: 'Colowatch',
    description:
      'AI & 3D Modeling for Colon Cancer Detection.',
    imageUrl: '/CaseStudies/colonScan.jpg',
    link: '/colowatch-case-studies',
  },
  // …and six more items (3 through 8)…
  {
    id: 3,
    title: 'Hyperflex.ai',
    description: 'AI-Powered Search Engine for Education.',
    imageUrl: '/CaseStudies/hyperfleex.jpg',
    link: '/hyperflex-ai',
  },
  {
    id: 4,
    title: 'Web Scraping',
    description: 'Get the Data Your Business Needs.',
    imageUrl: '/CaseStudies/webscrapingh.jpg',
    link: '/web-scraping-services',
  },
  {
    id: 5,
    title: 'Text Analytics',
    description: 'Transforming Caregiver Communication with Text Analytics.',
    imageUrl: '/CaseStudies/textanla.jpg',
    link: '/text-analytics',
  },
  {
    id: 6,
    title: 'Radi Insight Scan',
    description: 'Making Medical Reports More Accessible.',
    imageUrl: '/CaseStudies/scans.jpg',
    link: '/radi-insight-scan',
  },
  {
    id: 7,
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
    <div className="max-w-7xl bg-gradient-to-br from-[#fffef7] to-[#f5fdff] mx-auto px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        {visibleStudies.map(({ id, title, description, imageUrl, link }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl text-gray-800  font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
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
          className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default AllCaseStudies;
