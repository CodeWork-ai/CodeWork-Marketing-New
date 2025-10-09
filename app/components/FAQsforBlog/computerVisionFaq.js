'use client';
import React, { useState } from 'react';

const ComputerVisionFaq = () => {
  const faqs = [
    {
      question: "What is computer vision in simple terms?",
      answer: [
        "Computer vision is a branch of artificial intelligence that enables machines to interpret and understand images or videos, similar to how humans see and process visual information.",
      ],
    },
    {
      question: "How is computer vision used in real life?",
      answer: [
        "Computer vision is used in facial recognition, medical imaging, self-driving cars, retail automation, manufacturing quality checks, agriculture monitoring, and even AR filters in social media apps.",
      ],
    },
    {
      question: "What is the difference between image processing and computer vision?",
      answer: [
        "Image processing focuses on improving or transforming images, such as adjusting brightness or removing noise. Computer vision goes further by analyzing and interpreting images to make decisions or predictions.",
      ],
    },
    {
      question: "Why is deep learning important in computer vision?",
      answer: [
        "Deep learning, especially Convolutional Neural Networks (CNNs), helps computer vision systems automatically detect patterns and features in images, leading to more accurate object detection, classification, and recognition.",
      ],
    },
    {
      question: "What are the main challenges in computer vision?",
      answer: [
        "Key challenges include the need for large datasets, risk of bias in training data, handling poor image quality, and deploying models efficiently on real-world devices.",
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
            Understanding Computer Vision
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

export default ComputerVisionFaq;