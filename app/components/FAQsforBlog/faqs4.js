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
      "You experience MCP in action when a chatbot remembers your last support request, or when Netflix recommends movies based on your recent viewing history. It’s behind smarter voice assistants, personalized shopping suggestions, and contextual customer service.",
    ],
  },
  {
    question: "Does MCP improve AI’s accuracy?",
    answer: [
      "Yes. By understanding the full context of a request, including previous conversations, user preferences, and environment, MCP significantly improves the relevance and precision of AI responses.",
    ],
  },
  {
    question: "How will MCP shape the future of AI?",
    answer: [
      "MCP is paving the way for hyper-personalized AI interactions. As it evolves, we’ll see AI systems that understand not just commands but emotions, habits, and goals, resulting in more intuitive, human-like digital experiences.",
    ],
  },
];

const Faqs4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" bg-gradient-to-b from-[#EBF9FF] to-[#f0f9fc] py-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Frequently  Questions
    </h3>
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={faq.question} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
            onClick={() => toggle(idx)}
          >
            <span className="text-gray-800 text-left">{faq.question}</span>
            <svg
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
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
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-600 space-y-1">
              {faq.answer.map((line, lineIdx) => (
                <div key={lineIdx}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faqs4;