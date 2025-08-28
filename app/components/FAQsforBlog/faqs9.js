"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Stargate UAE, and why is it important?",
    answer: [
      "Stargate UAE is a national AI project by the UAE government and OpenAI, aimed at building a massive AI data center and providing free ChatGPT Plus access to all residents.",
    ],
  },
  {
    question: "Who can access ChatGPT Plus for free in the UAE?",
    answer: [
      "All residents of the UAE are eligible for a free ChatGPT Plus subscription as part of the Stargate UAE initiative.",
    ],
  },
  {
    question: "What features are included in the free ChatGPT Plus subscription in the UAE?",
    answer: [
      "Residents get access to GPT-4o, faster response times, priority access during peak hours, and advanced AI tools for writing, learning, and coding.",
    ],
  },
  {
    question: "How is the UAE supporting AI development through Stargate UAE?",
    answer: [
      "The country is building a one-gigawatt AI computing cluster in Abu Dhabi and partnering with global tech companies to develop localized, secure, and responsible AI solutions.",
    ],
  },
  {
    question: "Which global tech companies are partnering with the UAE on this AI initiative?",
    answer: [
      "Key partners include Oracle, Nvidia, Cisco, SoftBank, Microsoft-backed G42, and other leading AI innovators.",
    ],
  },
];

const Faqs8 = () => {
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
            UAE's Stargate AI Initiative & Free ChatGPT Plus
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
            Interested in implementing similar AI initiatives for your region or organization?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Explore AI Infrastructure Solutions
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

export default Faqs8;
