'use client';
import React, { useState } from 'react';

const MachineLearningFaq = () => {
  const faqs = [
    {
      question: "What is machine learning?",
      answer: [
        "Machine learning is a subset of AI that enables machines to learn from data, identify patterns, and make predictions or decisions without being explicitly programmed.",
      ],
    },
    {
      question: "What are the main types of machine learning?",
      answer: [
        "The three key types are:",
        "• Supervised Learning: Learns from labeled data (e.g., spam filters)",
        "• Unsupervised Learning: Finds patterns in unlabeled data (e.g., customer segmentation)",
        "• Reinforcement Learning: Learns through rewards and penalties (e.g., self-driving cars)",
      ],
    },
    {
      question: "Which algorithms are commonly used in machine learning?",
      answer: [
        "Popular algorithms include Linear Regression, Decision Trees, Random Forest, K-Means Clustering, and Support Vector Machines (SVM).",
      ],
    },
    {
      question: "What are the pros and cons of machine learning?",
      answer: [
        "Pros: Automates decisions, improves over time, and handles large datasets.",
        "Cons: Requires lots of data, can be biased, and some models lack explainability.",
      ],
    },
    {
      question: "How is machine learning used in real life?",
      answer: [
        "ML powers healthcare (disease prediction), finance (fraud detection), e-commerce (product recommendations), and transportation (self-driving vehicles).",
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
            Understanding Machine Learning Fundamentals
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

export default MachineLearningFaq;
