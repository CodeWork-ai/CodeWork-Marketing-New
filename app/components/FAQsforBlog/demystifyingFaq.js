'use client';
import React, { useState } from 'react';

const DemystifyingFaq = () => {
  const faqs = [
    {
      question: "What's the difference between LLMs and LAMs?",
      answer: [
        "Large Language Models (LLMs) like GPT-4 and Claude are designed to understand and generate text, making them great for content writing, translation, and question answering. Large Action Models (LAMs), go beyond text generation, they can actually perform tasks based on natural language instructions, such as booking meetings, filling out forms, or controlling software applications.",
      ],
    },
    {
      question: "Can generative AI models handle both images and text at the same time?",
      answer: [
        "Yes! Large Multimodal Models (LMMs) are specifically designed to work with multiple types of input including text, images, audio, and video within a single model. Examples include GPT-4V, Google's Gemini, and Claude 3. These models can describe images in words, generate pictures from text descriptions, and perform other cross-modal tasks.",
      ],
    },
    {
      question: "What are Large Vision Models (LVMs) used for?",
      answer: [
        "LVMs specialize in processing visual content like images and videos. They're commonly used for image generation (like DALL·E 3 and Midjourney), object detection, medical imaging analysis, and video content creation. These models use architectures like convolutional neural networks (CNNs) or vision transformers to analyze and generate visual content.",
      ],
    },
    {
      question: "What are Large Concept Models (LCMs) and how are they different from traditional language models?",
      answer: [
        "Large Concept Models are an emerging development in generative AI that process ideas or concepts rather than individual words or tokens. They work at a higher level of abstraction, which helps produce more coherent and meaningful output. Though still in early development, LCMs show promise in reducing factual errors and improving long-form reasoning compared to traditional token-based models.",
      ],
    },
    {
      question: "What are Large World Models (LWMs) and what problems do they solve?",
      answer: [
        "Large World Models are designed to understand how things interact in the real world over time. They process large amounts of video and language data to simulate complex environments, making them useful for robotics, realistic simulations, and AI agents that need to interact with physical spaces. They represent a growing area focused on helping AI understand real-world dynamics and temporal relationships.",
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
            Demystifying Generative AI: A Friendly Guide to Different Model Types
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
            Want to learn more about Generative AI models?
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-glow">
            Explore AI Solutions
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

export default DemystifyingFaq;
