'use client';
import React, { useState } from 'react';

const CICDPipelineFaq = () => {
  const faqs = [
    {
      question: "What does CI/CD stand for and what is its main purpose?",
      answer: [
        "CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery). Its main purpose is to automate software development workflows, allowing teams to integrate code frequently, run automated tests, and release changes to production more reliably and quickly.",
      ],
    },
    {
      question: "What are the key advantages of using a CI/CD pipeline?",
      answer: [
        "Key advantages include faster release cycles (due to automation), improved code quality (via automated testing), reduced risk (from smaller, incremental updates), and the early detection of issues, making fixes less expensive.",
      ],
    },
    {
      question: "What are the typical stages in a basic CI/CD workflow?",
      answer: [
        "A typical CI/CD workflow involves:",
        "• Code Commit: A developer pushes code to a shared repository (e.g., GitHub)",
        "• Continuous Integration (CI): The code is automatically built and tested to ensure seamless merging",
        "• Testing: Automated tests (unit, integration, functional) are run",
        "• Continuous Deployment/Delivery (CD): The tested code is either automatically deployed to production (Deployment) or staged for a manual push (Delivery)",
      ],
    },
    {
      question: "What is the difference between Continuous Deployment and Continuous Delivery?",
      answer: [
        "Continuous Delivery means the code is successfully built, tested, and ready to be deployed to production, but the final deployment step is triggered manually.",
        "Continuous Deployment means the code is automatically built, tested, and deployed to production without any manual intervention, provided all automated checks pass.",
      ],
    },
    {
      question: "What are some popular tools used to set up CI/CD pipelines?",
      answer: [
        "Popular tools for setting up and managing CI/CD pipelines include open-source options like Jenkins and integrated platform tools such as GitHub Actions, GitLab CI/CD, CircleCI, and Azure DevOps.",
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
            Understanding CI/CD Pipelines
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

export default CICDPipelineFaq;