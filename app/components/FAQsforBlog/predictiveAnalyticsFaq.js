'use client';
import React, { useState } from 'react';

const PredictiveAnalyticsFaq = () => {
  const faqs = [
    {
      question: "What is predictive analytics?",
      answer: [
        "Predictive analytics is a branch of data science that uses statistical techniques, machine learning, and neural networks to forecast future outcomes based on historical data.",
      ],
    },
    {
      question: "What types of predictive models are commonly used?",
      answer: [
        "The main types include classification models, regression models, time series models, clustering models, and neural network models, each designed for different prediction tasks.",
      ],
    },
    {
      question: "How does predictive analytics benefit businesses?",
      answer: [
        "It improves decision-making, enhances operational efficiency, reduces costs, prevents risks, and enables personalized customer experiences.",
      ],
    },
    {
      question: "Which industries use predictive analytics the most?",
      answer: [
        "Predictive analytics is widely applied in healthcare (disease detection), finance (fraud detection, credit risk), retail (demand forecasting, personalization), manufacturing (predictive maintenance), and marketing (churn reduction, customer targeting).",
      ],
    },
    {
      question: "What algorithms are used in predictive modeling?",
      answer: [
        "Common algorithms include Logistic Regression, Decision Trees, Random Forest, SVM, ARIMA, K-Means, CNNs, RNNs, LSTMs, and Transformers, depending on the model type and data.",
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
            Understanding Predictive Analytics
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

export default PredictiveAnalyticsFaq;
