// AgileSoftwareProcess.jsx
"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: 'Understanding Business Requirements',
    description:
      'A successful AI implementation starts with a clear goal. We collaborate with you to understand your business challenges, industry-specific needs, and available datasets, ensuring the development of an AI model that delivers measurable results.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Data Collection and Preprocessing',
    description:
      'Quality data is the foundation of any AI model. Our experts assist in data collection, cleaning, and preprocessing, eliminating inconsistencies to ensure that the model is trained on accurate, structured, and relevant datasets for optimal performance.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Model Training and Evaluation',
    description:
      'Our AI model undergoes rigorous training using advanced techniques. We continuously test, validate, and refine the model to ensure it meets performance benchmarks and aligns with your business goals.',
    bgImage: '/OurAiModel/arrow2.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Deployment and Optimization',
    description:
      'Once the model is trained, we handle deployment into your environment and continuously monitor performance, making adjustments to ensure it remains accurate and efficient at scale.',
    bgImage: '/OurAiModel/arrow2.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Continuous Learning and Improvement',
    description:
      'AI is ever-evolving. We integrate feedback loops, retrain models with new data, and implement adaptive learning strategies to ensure your AI solutions remain relevant.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
  {
    title: 'Business Impact and Insights',
    description:
      'Our AI-driven solutions are designed to provide actionable insights. We analyze model performance, extract key trends, and enable data-driven decision-making for sustained business success.',
    bgImage: '/OurAiModel/arrow1.svg',
    width: '600px',
    height: '250px',
  },
];

const AgileSoftwareProcess = () => {
  // Titles that require extra indentation
  const indentTitles = [
    'Model Training and Evaluation',
    'Deployment and Optimization'
  ];

  // Split steps into rows (2 steps per row)
  const rows = [];
  for (let i = 0; i < steps.length; i += 2) {
    rows.push(steps.slice(i, i + 2));
  }

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,    // animation duration in ms
      once: true        // animate only once
    });
  }, []);

  return (
    <div className="p-20 bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff]">
      <h2 className="text-4xl font-bold text-black mb-6">
        Agile Software Process
      </h2>
      <div className="space-y-28">
        {rows.map((row, rowIdx) => {
          // even rows (0,2,4…) → fade-right; odd rows → fade-left
          const animation = rowIdx % 2 === 0 ? 'fade-right' : 'fade-left';

          return (
            <div key={rowIdx} className="flex gap-10">
              {row.map((step, idx) => {
                const needsIndent = indentTitles.includes(step.title);
                return (
                  <div
                    key={idx}
                    className="flex-1"
                    data-aos={animation}
                    style={{
                      width: step.width,
                      height: step.height,
                      backgroundImage: step.bgImage
                        ? `url(${step.bgImage})`
                        : undefined,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                    }}
                  >
                    <div className={`p-7 ${needsIndent ? 'pl-16' : ''}`}>
                      <h3 className="text-2xl w-3/4 text-gray-800 font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 w-3/4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgileSoftwareProcess;
