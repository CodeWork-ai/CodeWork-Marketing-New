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
    <div className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 drop-shadow-glow">
            Frequently Asked Questions
          </h3>
          <p className="text-white/70 text-lg">
            All about Radi Insight 3D and AI for Colorectal Screening
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="bg-primary/80 border border-secondary/30 rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-secondary/5 transition-colors duration-200"
                onClick={() => toggle(idx)}
              >
                <span className="text-white font-semibold text-left pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-secondary transform transition-transform duration-300 ${
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
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-white/80 space-y-2 border-t border-secondary/20">
                  {faq.answer.map((line, lineIdx) => (
                    <div key={lineIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need more information on Radi Insight 3D integration or AI healthcare tools?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Contact Our Healthcare AI Team
          </button>
        </div> */}
      </div>
      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
        }
      `}</style>
    </div>
  );
};

export default Faqs7;
