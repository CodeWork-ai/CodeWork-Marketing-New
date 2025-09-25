"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaBullseye, 
  FaDatabase, 
  FaBrain, 
  FaRocket, 
  FaSyncAlt, 
  FaChartLine 
} from 'react-icons/fa';

const steps = [
  {
    title: 'Understanding Business Requirements',
    description: 'A successful AI implementation starts with a clear goal. We collaborate with you to understand your business challenges, industry-specific needs, and available datasets, ensuring the development of an AI model that delivers measurable results.',
    Icon: FaBullseye,
    number: '01',
  },
  {
    title: 'Data Collection and Preprocessing',
    description: 'Quality data is the foundation of any AI model. Our experts assist in data collection, cleaning, and preprocessing, eliminating inconsistencies to ensure that the model is trained on accurate, structured, and relevant datasets for optimal performance.',
    Icon: FaDatabase,
    number: '02',
  },
  {
    title: 'Model Training and Evaluation',
    description: 'Our AI model undergoes rigorous training using advanced techniques. We continuously test, validate, and refine the model to ensure it meets performance benchmarks and aligns with your business goals.',
    Icon: FaBrain,
    number: '03',
  },
  {
    title: 'Deployment and Optimization',
    description: 'Once the model is trained, we handle deployment into your environment and continuously monitor performance, making adjustments to ensure it remains accurate and efficient at scale.',
    Icon: FaRocket,
    number: '04',
  },
  {
    title: 'Continuous Learning and Improvement',
    description: 'AI is ever-evolving. We integrate feedback loops, retrain models with new data, and implement adaptive learning strategies to ensure your AI solutions remain relevant and effective.',
    Icon: FaSyncAlt,
    number: '05',
  },
  {
    title: 'Business Impact and Insights',
    description: 'Our AI-driven solutions are designed to provide actionable insights. We analyze model performance, extract key trends, and enable data-driven decision-making for sustained business success.',
    Icon: FaChartLine,
    number: '06',
  },
];

const AgileSoftwareProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="relative bg-primary min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-secondary/12 rounded-full"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Development Process
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Agile Software <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our streamlined approach to AI development ensures quality, efficiency, and measurable business outcomes through iterative excellence.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/20 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const { Icon } = step;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  {/* Timeline Node */}
                  <div className="relative z-20 flex-shrink-0 mb-8 lg:mb-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-primary relative">
                      <Icon className="text-3xl text-primary" />
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-primary/90 rounded-full flex items-center justify-center text-secondary font-bold text-sm border-2 border-secondary/30">
                        {step.number}
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 max-w-lg lg:max-w-xl ${isEven ? 'lg:ml-12' : 'lg:mr-12'}`}>
                    <div className="bg-primary/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-primary/80 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                      {/* Card Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon in card header */}
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4">
                            <Icon className="text-xl text-secondary" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                          {step.description}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="mt-6 flex items-center">
                          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full transition-all duration-1000"
                              style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                            ></div>
                          </div>
                          <span className="ml-4 text-secondary font-bold text-sm">
                            {Math.round(((index + 1) / steps.length) * 100)}%
                          </span>
                        </div>
                      </div>

                      {/* Decorative Corner Elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary/30 rounded-tr-2xl"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl"></div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1 max-w-lg lg:max-w-xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-primary/90 via-secondary/10 to-primary/90 rounded-3xl p-12 border border-secondary/20 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your <span className="text-secondary">Business?</span>
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Our agile process ensures your AI implementation is successful, scalable, and delivers real business value from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-ai-solutions" className="bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-8 py-4 rounded-xl hover:from-secondary/90 hover:to-secondary hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center">
                  Start Your Project
                </Link>
                <Link href="/ai-services" className="border-2 border-secondary/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary/10 hover:border-secondary transition-all duration-300 inline-block text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default AgileSoftwareProcess;
