"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What exactly is the Model Context Protocol (MCP) in simple terms?",
    answer: [
      "MCP is like a GPS for AI conversations — it helps AI understand where it is in a conversation and how to respond appropriately by keeping track of context, user intent, and prior interactions.",
    ],
  },
  {
    question: "How is MCP different from traditional AI models?",
    answer: [
      "Traditional AI models often rely on isolated inputs, treating each query as a standalone. MCP-enhanced systems, however, use conversational history and environmental context to tailor responses, making interactions feel more natural and relevant.",
    ],
  },
  {
    question: "Where is MCP used in everyday applications?",
    answer: [
      "You experience MCP in action when a chatbot remembers your last support request, or when Netflix recommends movies based on your recent viewing history. It's behind smarter voice assistants, personalized shopping suggestions, and contextual customer service.",
    ],
  },
  {
    question: "Does MCP improve AI's accuracy?",
    answer: [
      "Yes. By understanding the full context of a request, including previous conversations, user preferences, and environment, MCP significantly improves the relevance and precision of AI responses.",
    ],
  },
  {
    question: "How will MCP shape the future of AI?",
    answer: [
      "MCP is paving the way for hyper-personalized AI interactions. As it evolves, we'll see AI systems that understand not just commands but emotions, habits, and goals, resulting in more intuitive, human-like digital experiences.",
    ],
  },
];

const Faqs4 = () => {
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
            Understanding Model Context Protocol (MCP)
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
            Want to learn more about implementing MCP in your AI systems?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Explore AI Solutions
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

export default Faqs4;
