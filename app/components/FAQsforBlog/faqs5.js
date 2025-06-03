"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Can you really train just 0.1% of a model and still get great results?",
    answer: [
      "Yes, LoRA makes it possible to fine-tune large models by training only around 0.1% of the parameters. Instead of updating the entire network, it introduces small, trainable matrices into specific layers. These are enough to adapt the model to new tasks, offering nearly the same performance as full fine-tuning but at a fraction of the cost.",
    ],
  },
  {
    question: "Is fine-tuning always resource-hungry?",
    answer: [
      "Traditional fine-tuning is typically very resource-intensive. It requires updating the full weight matrix of a large model, which can double the memory and computational demands. This approach is often slow, expensive, and impractical for many users without access to high-end GPUs or long training times.",
    ],
  },
  {
    question: "What’s the secret sauce behind LoRA’s low resource use?",
    answer: [
      "LoRA's efficiency comes from its approach of freezing the original model weights and introducing low-rank matrices (A and B) to approximate the changes needed. These small matrices capture task-specific information without touching the main model, dramatically reducing the number of parameters that need training and saving both time and computational resources.",
    ],
  },
  {
    question: "Could smaller updates be smarter?",
    answer: [
      "Yes, LoRA relies on the intrinsic rank hypothesis, which suggests that meaningful updates to a model exist in a low-dimensional space. By focusing only on those low-rank changes rather than the full weight matrix, LoRA can adapt models more efficiently and effectively using smaller, smarter updates.",
    ],
  },
  {
    question: "Can LoRA achieve performance similar to full fine-tuning?",
    answer: [
      "In many cases, yes. Despite training only a tiny fraction of parameters, LoRA can reach performance levels comparable to traditional fine-tuning. Its ability to efficiently capture essential task-specific adjustments allows it to adapt powerful language models without the massive resource demands of full retraining.",
    ],
  },
];

const Faqs5 = () => {
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

export default Faqs5;