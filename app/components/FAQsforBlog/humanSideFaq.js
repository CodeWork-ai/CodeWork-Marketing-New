'use client';
import React, { useState } from 'react';

const HumanSideFaq = () => {
  const faqs = [
    {
      question: "What is the biggest challenge in managing an AI implementation project?",
      answer: [
        "The biggest challenge isn't technical glitches or choosing the right tools; it's the human side of change. This includes managing team members' fears of obsolescence (\"Am I going to lose my job?\") and overcoming learned skepticism from surviving previous \"transformational\" initiatives.",
      ],
    },
    {
      question: "What roles must a project manager adopt when leading an AI project?",
      answer: [
        "A project manager leading an AI project must go beyond traditional duties and act as a \"people expert.\" This means being part therapist (addressing fears), part cheerleader (encouraging adoption), and part fortune teller (helping the team visualize a positive future role with AI).",
      ],
    },
    {
      question: "How can a manager build genuine trust with a skeptical team about AI?",
      answer: [
        "Genuine trust is built by:",
        "• Focusing on real benefits: Skip the corporate buzzwords and explain how AI will reduce late nights, eliminate boring tasks, and free up time for creative challenges",
        "• Allowing experimentation: Provide sandbox environments where team members can \"play\" with AI tools without fear of failure",
        "• Celebrating early wins: Make \"heroes\" out of people who successfully use the new AI tools to save time or solve a problem",
      ],
    },
    {
      question: "What are the common internal conversations team members have about AI?",
      answer: [
        "The conversations often revolve around fear and vulnerability, including:",
        "• \"Am I going to lose my job?\"",
        "• \"I feel stupid asking this, but...\" (Intimidation for people used to being experts)",
        "• \"Here we go again with another shiny tool\" (Learned skepticism from past failed initiatives)",
      ],
    },
    {
      question: "What is an effective strategy for handling AI training and development?",
      answer: [
        "Effective change management treats learning as growth, not catching up. Training should be framed as professional development and partnered with HR to be tied to career advancement, not presented as remedial education or a desperate attempt at survival.",
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
            The Human Side of AI Projects: Managing Teams Through Digital Transformation
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

export default HumanSideFaq;