"use client";
import React, { useState } from 'react';

/*************  ✨ Windsurf Command ⭐  *************/
/**

/*******  43ddcaeb-399d-45a6-86fc-ef81b7b6d8ab  *******/
const AiTransforming = () => {
  const faqs = [
    {
      question: "How is artificial intelligence transforming software development?",
      answer: [
        "AI is changing software development by automating tasks like coding, testing, and deployment. It makes the process faster, reduces human error, and helps developers focus on solving complex problems.",
      ],
    },
    {
      question: "What is the role of generative AI in development?",
      answer: [
        "Generative AI speeds up development by turning ideas into requirements, creating user stories, generating code, writing test cases, and even making documentation. It works alongside developers to improve product quality.",
      ],
    },
    {
      question: "How does AI help with code generation?",
      answer: [
        "AI-powered tools use machine learning and natural language processing to understand written instructions and create code. These tools can suggest lines of code or build complete functions, saving time and reducing errors.",
      ],
    },
    {
      question: "Can AI improve debugging and testing?",
      answer: [
        "Yes. AI can detect bugs, predict errors, and suggest fixes. It also creates smart test cases, prioritizes important tests, and improves software security by learning from past issues.",
      ],
    },
    {
      question: "How does AI support DevOps and project management?",
      answer: [
        "AI helps DevOps teams by automating repetitive tasks, improving CI/CD processes, and managing project timelines. It also enhances resource allocation and monitors performance to avoid deployment problems.",
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
            How is AI Transforming Software Development?
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

export default AiTransforming;
