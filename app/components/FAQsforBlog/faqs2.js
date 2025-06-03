"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the history behind Artificial Intelligence (AI)?",
    answer: [
      "Artificial Intelligence dates back to 1956, when it was introduced at the Dartmouth Conference. Early AI systems relied on rule-based logic for problem-solving. Over time, advances in machine learning and deep learning led to powerful systems that learn from data and perform complex tasks, transforming industries and everyday life.",
    ],
  },
  {
    question: " How did deep learning and transformers revolutionize AI?",
    answer: [
      "The deep learning revolution in the 2010s, powered by neural networks and high computational resources, drastically improved AI performance. Transformers, introduced in the paper “Attention Is All You Need”, changed the game by enabling faster, parallel processing and contextual understanding, paving the way for modern language models like GPT.",
    ],
  },
  {
    question: "What are AI agents, and how are they different from language models?",
    answer: [
      "AI agents go beyond traditional language models by autonomously reasoning, planning, and performing tasks. Powered by tools like LangChain and OpenAI's Function Calling, these agents can book trips, write code, and even collaborate with humans, marking a shift toward general-purpose, action-oriented AI.",
    ],
  },
  {
    question: " What is the difference between open-source and closed-source AI models?",
    answer: [
      "Open-source models (like Meta’s LLaMA and Hugging Face tools) promote transparency and community-driven innovation. Closed-source models (like GPT-4 or Claude) offer powerful performance but are restricted by licenses. Each approach has unique benefits in scalability, accessibility, and use cases.",
    ],
  },
  {
    question: " What are reasoning models in AI, and why are they important?",
    answer: [
      "Reasoning models represent the next leap in AI, focusing on logical decision-making and structured problem-solving. Techniques like Chain-of-Thought, Self-Reflection, and tree-of-thought help AI systems think more like humans, enhancing accuracy in multi-step tasks and real-world applications.",
    ],
  },
];

const Faqs2 = () => {
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

export default Faqs2;
