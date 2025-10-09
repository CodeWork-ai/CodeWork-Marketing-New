'use client';
import React, { useState } from 'react';

const NeuralNetwork = () => {
  const faqs = [
    {
      question: "What is a neural network?",
      answer: [
        "A neural network is a machine learning model inspired by the human brain, consisting of layers of interconnected nodes (neurons) that process data to identify patterns and make predictions.",
      ],
    },
    {
      question: "How do neural networks work?",
      answer: [
        "Neural networks process data through input layers (receiving features), hidden layers (applying weights, biases, and activation functions), and output layers (producing predictions, often as probabilities).",
      ],
    },
    {
      question: "What are the different types of neural networks?",
      answer: [
        "Common types include:",
        "• Feedforward Neural Networks (FNN) – basic predictions",
        "• Convolutional Neural Networks (CNN) – image/video tasks",
        "• Recurrent Neural Networks (RNN) – sequential data like text or audio",
        "• Generative Adversarial Networks (GANs) – generating new data",
      ],
    },
    {
      question: "What is the difference between neural networks and deep learning?",
      answer: [
        "Neural networks are the foundation of machine learning. Deep learning involves neural networks with multiple hidden layers, enabling the modeling of highly complex relationships in large datasets.",
      ],
    },
    {
      question: "Where are neural networks used in real life?",
      answer: [
        "Neural networks power applications like image recognition, voice assistants (Siri, Alexa), ChatGPT, self-driving cars, and more across industries such as healthcare, finance, marketing, and entertainment.",
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
            Understanding Neural Networks in AI
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

export default NeuralNetwork;
