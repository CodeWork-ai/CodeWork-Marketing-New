"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Radi Insight 3D, and how does it help in colorectal cancer screening?",
    answer: [
      "Radi Insight 3D is an advanced imaging platform that turns CT scan data into 3D virtual colonoscopies. It helps radiologists detect abnormalities more accurately and efficiently.",
    ],
  },
  {
    question: "How does Radi Insight 3D handle DICOM data?",
    answer: [
      "The platform uses secure, API-driven tools to automatically retrieve and process DICOM files, converting them into 3D models for better visualization and faster diagnosis.",
    ],
  },
  {
    question: "Is Radi Insight 3D compatible with existing hospital systems?",
    answer: [
      "Yes, it integrates seamlessly with systems like PowerShare, PowerScribe, and Viatronix using custom middleware, ensuring smooth communication and data flow.",
    ],
  },
  {
    question: "What makes Radi Insight 3D's AI segmentation unique?",
    answer: [
      "Its AI uses a custom 3D U-Net model that accurately identifies colon structures, even in noisy or low-quality scans, improving screening reliability and reducing false results.",
    ],
  },
];

const Faqs7 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" bg-gradient-to-b from-[#EBF9FF] to-[#f0f9fc] py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Frequently  Questions
    </h3>
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={faq.question} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
            onClick={() => toggle(idx)}
          >
            <span className="text-gray-800 text-left">{faq.question}</span>
            <svg
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-600 space-y-1">
              {faq.answer.map((line, lineIdx) => (
                <div key={lineIdx}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faqs7;