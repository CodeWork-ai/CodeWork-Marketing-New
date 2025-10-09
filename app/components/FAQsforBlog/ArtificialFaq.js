'use client';
import React, { useState } from 'react';

const ArtificialFaq = () => {
  const faqs = [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer: [
        "AI is the ability of machines to perform tasks that normally require human intelligence, such as learning, decision-making, understanding language, and recognizing patterns.",
      ],
    },
    {
      question: "How does Machine Learning fit into AI?",
      answer: [
        "Machine Learning (ML) is the core of AI. It enables systems to learn from data, identify patterns, and improve predictions without being explicitly programmed for every task.",
      ],
    },
    {
      question: "What are some real-world applications of AI?",
      answer: [
        "AI is widely used in healthcare (disease diagnosis, medical imaging), finance (fraud detection, risk management), retail (personalized shopping), transportation (autonomous vehicles), education (adaptive learning), and even homes (smart devices).",
      ],
    },
    {
      question: "What are the main challenges and risks of AI?",
      answer: [
        "Key challenges include bias in data, privacy concerns, job displacement due to automation, security risks, and lack of transparency in decision-making.",
      ],
    },
    {
      question: "What are the principles of responsible AI?",
      answer: [
        "Responsible AI emphasizes transparency, accountability, fairness, privacy, and regulation to ensure ethical use, build trust, and maximize positive impact on society.",
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
            Understanding Artificial Intelligence
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

export default ArtificialFaq;
