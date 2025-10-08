"use client";
import React, { useState } from 'react';

const NewEraFaq = () => {
  const faqs = [
    {
      question: "What is AI in digital marketing?",
      answer: [
        "AI in digital marketing uses machine learning, predictive analytics, and automation to personalize campaigns, analyse data, and improve audience targeting.",
      ],
    },
    {
      question: "Why is AI important in digital marketing today?",
      answer: [
        "AI is important because it saves time, predicts consumer behaviour, reduces ad spend waste, and boosts conversions with personalized marketing strategies.",
      ],
    },
    {
      question: "How is AI used in digital marketing?",
      answer: [
        "AI is used for chatbots, predictive analytics, dynamic content creation, video personalization, and automated product recommendations.",
      ],
    },
    {
      question: "What are the benefits of AI-driven marketing strategies?",
      answer: [
        "AI-driven marketing offers enhanced targeting, better decision-making with real-time insights, scalability, and higher ROI through personalization.",
      ],
    },
    {
      question: "What are the future trends of AI in digital marketing?",
      answer: [
        "Future AI trends include voice search optimization, visual recognition AI, AI video generation, and ethical AI for transparent marketing.",
      ],
    },
    {
      question: "What are the best AI tools for digital marketing?",
      answer: [
        "Popular AI tools include ChatGPT for content creation, HubSpot AI for automation, GA4 with AI for predictive analytics, Jasper AI for SEO writing, and SEMrush for AI-driven audits and rank tracking.",
      ],
    },
    {
      question: "Which AI tools help with SEO and keyword research?",
      answer: [
        "Tools like Surfer SEO, Ubersuggest, Ahrefs, and Screaming Frog use AI to optimize content, find keyword opportunities, analyse backlinks, and improve on-site SEO performance.",
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
            The New Era of AI: How Digital Marketing Will Never Be the Same Again
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

export default NewEraFaq;
