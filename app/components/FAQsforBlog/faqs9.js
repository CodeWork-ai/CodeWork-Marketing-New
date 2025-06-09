"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What are deepfakes, and how can they be both beneficial and harmful?",
    answer: [
      "Deepfakes are AI-created content that can realistically mimic a person's appearance, voice, and behavior.They can be beneficial in areas like marketing, entertainment, and training, but harmful when used for corporate fraud, brand defamation, cybercrime, personal exploitation, and election interference.",
    ],
  },
  {
    question: "What are some common scenarios where deepfakes are misused?",
    answer: [
      "Common misuse scenarios include impersonating executives in financial scams, creating fake videos of CEOs, using voice clones for phishing, generating non-consensual synthetic media, and spreading false information during elections.",
    ],
  },
  {
    question: "How are organizations and governments working to detect and mitigate deepfakes?",
    answer: [
      "They use watermarking, provenance tracking, AI forensics, and content labeling. Platforms have takedown policies and filters. Legal enforcement includes penalties for scams and legal actions against impersonation. Election-specific tools are also being adapted for wider use.",
    ],
  },
  {
    question: "What are some key laws or regulations currently addressing deepfakes?",
    answer: [
      "In the U.S., the FTC Act, the TAKE IT DOWN Act, and the proposed No Fakes Act are relevant. Over 20 states have their own deepfake laws. Internationally, the EU AI Act and the UK Online Safety Act address deepfake risks, with global coordination efforts led by the G7 and Council of Europe.",
    ],
  },
  {
    question: "Why is it important to act now in addressing deepfake-related risks?",
    answer: [
      "Because deepfakes are already realistic and widespread, posing serious risks to trust, reputation, and democracy. A prompt ethical and strategic response is needed to ensure transparency, consent, and governance in AI use.",
    ],
  },
];

const Faqs9 = () => {
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

export default Faqs9;