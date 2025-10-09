'use client';
import React, { useState } from 'react';

const AIChatbotFaq = () => {
  const faqs = [
    {
      question: "What is AI chatbot integration?",
      answer: [
        "AI chatbot integration is the process of connecting a chatbot with business systems like websites, apps, CRMs, or helpdesks, enabling real-time responses and automated tasks.",
      ],
    },
    {
      question: "Why should businesses integrate AI chatbots?",
      answer: [
        "Integration improves customer experience with 24/7 support, automates repetitive tasks, personalizes interactions, increases efficiency, and generates valuable insights.",
      ],
    },
    {
      question: "What challenges do companies face in chatbot integration?",
      answer: [
        "Common issues include data security risks, legacy system compatibility, poor conversation design, and customer resistance to automation.",
      ],
    },
    {
      question: "How can businesses successfully integrate an AI chatbot?",
      answer: [
        "Key steps include defining goals, choosing the right platform, connecting systems via APIs, designing conversation flows, testing thoroughly, deploying gradually, and monitoring performance.",
      ],
    },
    {
      question: "How do you measure the success of an AI chatbot?",
      answer: [
        "Success is tracked through metrics like response time, resolution rate, customer satisfaction (CSAT), lead conversions, and cost savings from automation.",
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
            AI Chatbot Integration Guide
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
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Ready to integrate AI chatbots into your business?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Explore Chatbot Solutions
          </button>
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

export default AIChatbotFaq;