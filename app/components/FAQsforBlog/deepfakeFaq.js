"use client";
import React, { useState } from 'react';

const DeepfakeFaq = () => {
  const faqs = [
    {
      question: "What are deepfakes, and how can they be both beneficial and harmful?",
      answer: [
        "Deepfakes are AI-created content that can realistically mimic a person's appearance, voice, and behavior. They can be beneficial in areas like marketing, entertainment, and training, but harmful when used for corporate fraud, brand defamation, cybercrime, personal exploitation, and election interference.",
      ],
    },
    {
      question: "What are some common scenarios where deepfakes are misused?",
      answer: [
        "Common misuse scenarios include impersonating executives in financial scams, creating fake videos of CEOs, using voice clones for phishing, generating non-consensual synthetic media, and spreading false information during elections.",
      ],
    },
    {
      question: "How are organizations and governments working to detect and mitigate deepfakes?",
      answer: [
        "They use watermarking, provenance tracking, AI forensics, and content labeling. Platforms have takedown policies and filters. Legal enforcement includes penalties for scams and legal actions against impersonation. Election-specific tools are also being adapted for wider use.",
      ],
    },
    {
      question: "What are some key laws or regulations currently addressing deepfakes?",
      answer: [
        "In the U.S., the FTC Act, the TAKE IT DOWN Act, and the proposed No Fakes Act are relevant. Over 20 states have their own deepfake laws. Internationally, the EU AI Act and the UK Online Safety Act address deepfake risks, with global coordination efforts led by the G7 and Council of Europe.",
      ],
    },
    {
      question: "Why is it important to act now in addressing deepfake-related risks?",
      answer: [
        "Because deepfakes are already realistic and widespread, posing serious risks to trust, reputation, and democracy. A prompt ethical and strategic response is needed to ensure transparency, consent, and governance in AI use.",
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
            Understanding Deepfakes: Benefits, Risks, and Regulations
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

export default DeepfakeFaq;