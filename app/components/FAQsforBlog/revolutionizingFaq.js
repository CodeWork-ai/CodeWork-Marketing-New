"use client";
import React, { useState } from 'react';

const RevolutionizingFaq = () => {
  const faqs = [
    {
      question: "What is CODEWORK's AI recruitment platform?",
      answer: [
        "CODEWORK's AI recruitment platform is a data-driven hiring system that automates resume screening, candidate ranking, interview scheduling, and onboarding to make hiring faster and smarter.",
      ],
    },
    {
      question: "Why is automation important in recruitment?",
      answer: [
        "Automation in recruitment saves time, reduces hiring costs, removes bias, and improves the overall candidate experience while helping companies fill roles quickly and efficiently.",
      ],
    },
    {
      question: "How does CODEWORK use AI in hiring?",
      answer: [
        "CODEWORK uses AI tools like natural language processing for resume screening, predictive analytics for candidate ranking, and AI chatbots for scheduling and engagement.",
      ],
    },
    {
      question: "What benefits do businesses get from using CODEWORK's AI hiring system?",
      answer: [
        "Businesses can reduce hiring time by up to 50%, improve quality of hire, scale recruitment across multiple roles, and ensure unbiased, data-backed decisions.",
      ],
    },
    {
      question: "What is the future of recruitment with CODEWORK?",
      answer: [
        "The future of recruitment with CODEWORK includes AI-powered video interview analysis, advanced behavior prediction models, and seamless HRMS integration for even smarter hiring.",
      ],
    },
  ];

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
            Revolutionizing Hiring: How CODEWORK is Automating Recruitment with AI
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

export default RevolutionizingFaq;