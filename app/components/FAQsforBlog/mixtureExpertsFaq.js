'use client';
import React, { useState } from 'react';

const MixtureExpertsFaq = () => {
  const faqs = [
    {
      question: "What is Mixture of Experts (MoE) in AI?",
      answer: [
        "MoE is an AI architecture where only a few specialized sub-models (\"experts\") are activated for each task, making AI more efficient compared to running the entire model.",
      ],
    },
    {
      question: "How does Mixture of Experts work?",
      answer: [
        "MoE uses a gating network to select the most relevant experts, activates them with sparse activation, and then aggregates their outputs to produce the result.",
      ],
    },
    {
      question: "What are some real-world examples of MoE models?",
      answer: [
        "Examples include Mixtral 8x7B (for text generation and reasoning), DBRX by Databricks (for code and math), and DeepSeek-V2 (for long document processing).",
      ],
    },
    {
      question: "What are the benefits of using MoE?",
      answer: [
        "MoE makes AI models more efficient, enables faster inference, allows smarter task specialization, and supports flexible scaling by adding experts when needed.",
      ],
    },
    {
      question: "Why is MoE important for the future of AI?",
      answer: [
        "MoE shows that progress in AI isn't just about making bigger models—it's about making smarter, cost-effective, and specialized models that perform better with fewer resources.",
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
            Mixture of Experts: Making AI Smarter, Not Just Bigger
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

export default MixtureExpertsFaq;
