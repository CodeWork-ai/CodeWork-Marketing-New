'use client';
import React, { useState } from 'react';

const DataEngineeringFaq = () => {
  const faqs = [
    {
      question: "What is Data Engineering?",
      answer: [
        "Data engineering is the process of building and maintaining systems that collect, clean, transform, and deliver raw data into usable formats for analysis and AI applications.",
      ],
    },
    {
      question: "Why is data engineering important for businesses?",
      answer: [
        "It powers real-world applications like Netflix recommendations, Amazon personalization, fraud detection in banking, and real-time patient monitoring in healthcare. Without reliable data pipelines, these services would not function efficiently.",
      ],
    },
    {
      question: "What types of data do data engineers work with?",
      answer: [
        "They handle structured data (like SQL tables), unstructured data (such as videos or social media posts), and semi-structured data (like JSON or XML).",
      ],
    },
    {
      question: "How does data engineering support AI?",
      answer: [
        "Data engineers provide clean, labeled, and real-time datasets for AI models. They build data lakes, manage pipelines, and prepare training data, ensuring machine learning and generative AI deliver accurate results.",
      ],
    },
    {
      question: "What tools and technologies are commonly used in data engineering?",
      answer: [
        "Key tools include Snowflake, BigQuery, Redshift (storage), Apache Airflow, Prefect (orchestration), Kafka, Flink (streaming), Python, SQL, Scala (programming), and AWS, Azure, Google Cloud (cloud platforms).",
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
            Understanding Data Engineering
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

export default DataEngineeringFaq;