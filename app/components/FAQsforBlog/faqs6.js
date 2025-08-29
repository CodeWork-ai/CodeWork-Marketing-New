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
    <div className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 drop-shadow-glow">
            Frequently Asked Questions
          </h3>
          <p className="text-white/70 text-lg">
            Responsible AI Adoption and Business Strategy
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
            Ready to implement AI the right way in your business?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Get Strategic AI Guidance
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

export default Faqs6;
