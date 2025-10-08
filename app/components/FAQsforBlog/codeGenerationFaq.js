"use client";
import React, { useState } from 'react';

const CodeGenerationFaq = () => {
  const faqs = [
    {
      question: "What is code generation automation in software development?",
      answer: [
        "Code generation automation means using AI tools to write and improve code automatically, with little human help. These tools speed up development by predicting patterns and taking care of routine coding tasks.",
      ],
    },
    {
      question: "How does AI improve code quality and productivity?",
      answer: [
        "AI finds bugs, checks for mistakes, and follows coding standards in real-time. It automates repetitive tasks like testing and debugging, letting developers focus on bigger problems and new ideas.",
      ],
    },
    {
      question: "What are popular AI code generation tools?",
      answer: [
        "Popular tools include GitHub Copilot (code suggestions), Tabnine (predicts and completes code), and OpenAI Codex (turns natural language into code).",
      ],
    },
    {
      question: "What are the main challenges of AI-driven code generation?",
      answer: [
        "Some challenges are over-reliance on AI, worries about data security, and the risk of biased code. Developers must review AI-generated code to ensure its correct and safe.",
      ],
    },
    {
      question: "How will AI change the future of software development?",
      answer: [
        "AI will make development much faster, improve code safety and security, and help create scalable software. Developers using these tools will have an edge in building efficient applications.",
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
            Code Generation Automation: Revolutionizing Software Development with AI
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

export default CodeGenerationFaq;
