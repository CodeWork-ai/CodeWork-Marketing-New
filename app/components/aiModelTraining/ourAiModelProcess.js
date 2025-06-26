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
  },
  {
    title: 'Data Collection and Preprocessing',
    description:
      'Quality data is the foundation of any AI model. Our experts assist in data collection, cleaning, and preprocessing, eliminating inconsistencies to ensure that the model is trained on accurate, structured, and relevant datasets for optimal performance.',
    bgImage: '/OurAiModel/arrow1.svg',
  },
  {
    title: 'Model Training and Evaluation',
    description:
      'Our AI model undergoes rigorous training using advanced techniques. We continuously test, validate, and refine the model to ensure it meets performance benchmarks and aligns with your business goals.',
    bgImage: '/OurAiModel/arrow2.svg',
  },
  {
    title: 'Deployment and Optimization',
    description:
      'Once the model is trained, we handle deployment into your environment and continuously monitor performance, making adjustments to ensure it remains accurate and efficient at scale.',
    bgImage: '/OurAiModel/arrow2.svg',
  },
  {
    title: 'Continuous Learning and Improvement',
    description:
      'AI is ever-evolving. We integrate feedback loops, retrain models with new data, and implement adaptive learning strategies to ensure your AI solutions remain relevant.',
    bgImage: '/OurAiModel/arrow1.svg',
  },
  {
    title: 'Business Impact and Insights',
    description:
      'Our AI-driven solutions are designed to provide actionable insights. We analyze model performance, extract key trends, and enable data-driven decision-making for sustained business success.',
    bgImage: '/OurAiModel/arrow1.svg',
  },
];

const AgileSoftwareProcess = () => {
  // Titles that require extra indentation on larger screens
  const indentTitles = [
    'Model Training and Evaluation',
    'Deployment and Optimization'
  ];

  // Split steps into rows (2 steps per row) for desktop/tablet
  const rows = [];
  for (let i = 0; i < steps.length; i += 2) {
    rows.push(steps.slice(i, i + 2));
  }

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50, // trigger animations earlier for better mobile experience
    });
  }, []);

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-[#FBF8E6] to-[#ebf9ff]">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 lg:mb-6 text-center sm:text-left">
          Agile Software Process
        </h2>
        
        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden space-y-6 sm:space-y-12">
          {steps.map((step, idx) => {
            const needsIndent = indentTitles.includes(step.title);
            return (
              <div
                key={idx}
                className="relative max-w-sm mx-auto sm:max-w-none"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className="min-h-[160px] sm:min-h-[220px] bg-no-repeat bg-contain bg-center"
                  style={{
                    backgroundImage: step.bgImage ? `url(${step.bgImage})` : undefined,
                  }}
                >
                  <div className={`${needsIndent ? 'pl-20 pr-3 pt-3 pb-3' : 'pl-12 pr-3 pt-3 pb-3'} sm:p-6 ${needsIndent ? 'sm:pl-40' : ''}`}>
                    <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-4 leading-tight w-3/4 sm:w-full ml-0 sm:ml-0">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-700 leading-relaxed w-[70%] sm:w-full ml-0 sm:ml-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop/Tablet Layout - Two Columns */}
        <div className="hidden lg:block space-y-16 xl:space-y-28">
          {rows.map((row, rowIdx) => {
            const animation = rowIdx % 2 === 0 ? 'fade-right' : 'fade-left';

            return (
              <div key={rowIdx} className="flex gap-6 xl:gap-10 max-w-none">
                {row.map((step, idx) => {
                  const needsIndent = indentTitles.includes(step.title);
                  return (
                    <div
                      key={idx}
                      className="flex-1 max-w-[600px]"
                      data-aos={animation}
                      data-aos-delay={idx * 200}
                    >
                      <div
                        className="min-h-[250px] bg-no-repeat bg-contain"
                        style={{
                          backgroundImage: step.bgImage ? `url(${step.bgImage})` : undefined,
                        }}
                      >
                        <div className={`p-6 xl:p-7 ${needsIndent ? 'lg:pl-12 xl:pl-16' : ''}`}>
                          <h3 className="text-xl xl:text-2xl font-semibold text-gray-800 mb-3 xl:mb-2 leading-tight lg:w-4/5 xl:w-3/4">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed lg:w-4/5 xl:w-3/4 text-sm xl:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgileSoftwareProcess;