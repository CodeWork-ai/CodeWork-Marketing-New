"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Why do many AI projects fail in businesses?",
    answer: [
      "Many AI projects fail because businesses adopt AI without clear goals, clean data, or understanding if AI is the right solution. This leads to complexity and poor ROI.",
    ],
  },
  {
    question: "How should companies decide if AI is the right solution?",
    answer: [
      "Start by identifying the core business problem. If AI can solve it more efficiently than simpler methods, use it. Otherwise, opt for rule-based or basic analytics.",
    ],
  },
  {
    question: "What are the essentials before implementing AI in business?",
    answer: [
      "Key essentials include clean and organized data, clearly defined objectives, and collaboration between data scientists and business stakeholders.",
    ],
  },
  {
    question: "Is advanced AI always necessary for business success?",
    answer: [
      "No. Simple tools like dashboards, regression models, or rule-based systems can often deliver faster, cost-effective results with high impact.",
    ],
  },
  {
    question: "What does responsible AI adoption mean?",
    answer: [
      "Responsible AI adoption means using AI only when it truly fits the problem, focusing on business value over hype, and ensuring data readiness and clear goals.",
    ],
  },
];

const Faqs6 = () => {
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

export default Faqs6;