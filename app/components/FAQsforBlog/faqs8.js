"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Stargate UAE, and why is it important?",
    answer: [
      "Stargate UAE is a national AI project by the UAE government and OpenAI, aimed at building a massive AI data center and providing free ChatGPT Plus access to all residents.",
    ],
  },
  {
    question: "Who can access ChatGPT Plus for free in the UAE?",
    answer: [
      "All residents of the UAE are eligible for a free ChatGPT Plus subscription as part of the Stargate UAE initiative.",
    ],
  },
  {
    question: "What features are included in the free ChatGPT Plus subscription in the UAE?",
    answer: [
      "Residents get access to GPT-4o, faster response times, priority access during peak hours, and advanced AI tools for writing, learning, and coding.",
    ],
  },
  {
    question: "How is the UAE supporting AI development through Stargate UAE?",
    answer: [
      "The country is building a one-gigawatt AI computing cluster in Abu Dhabi and partnering with global tech companies to develop localized, secure, and responsible AI solutions.",
    ],
  },
  {
    question: "Which global tech companies are partnering with the UAE on this AI initiative?",
    answer: [
      "Key partners include Oracle, Nvidia, Cisco, SoftBank, Microsoft-backed G42, and other leading AI innovators.",
    ],
  },
];

const Faqs8 = () => {
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

export default Faqs8;