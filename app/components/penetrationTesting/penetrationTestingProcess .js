"use client";
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBolt, FaFolderOpen, FaFileAlt, FaHammer } from 'react-icons/fa';
import PenetrationTestingCycle from './penetrationTestingCycle';

const steps = [
  {
    title: 'Reconnaissance & Threat Mapping',
    description: 'Potential entry points and exploitable vulnerabilities are identified through cyber risk assessments.',
    Icon: FaSearch,
    step: '01',
  },
  {
    title: 'Exploitation & Attack Simulation',
    description: 'Real-world cyberattacks are encouraged to test the effectiveness of security defenses.',
    Icon: FaBolt,
    step: '02',
  },
  {
    title: 'Post-Exploitation Analysis',
    description: 'The impact of security breaches on sensitive data and business operations is evaluated.',
    Icon: FaFolderOpen,
    step: '03',
  },
  {
    title: 'Comprehensive Security Reporting & Risk Mitigation',
    description: 'Detailed security reports provide actionable recommendations for addressing vulnerabilities.',
    Icon: FaFileAlt,
    step: '04',
  },
  {
    title: 'Remediation Support & Retesting',
    description: 'Guidance on fixing vulnerabilities is provided, followed by retesting to validate security enhancements.',
    Icon: FaHammer,
    step: '05',
  },
];

const PenetrationTestingProcess = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-primary min-h-screen overflow-hidden py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
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
        <div className="absolute top-3/4 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Penetration Testing Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Comprehensive <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Penetration Testing</span> Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-3 sm:mb-4"></div>
          <p className="text-white/90 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Our detailed penetration testing framework offers thorough vulnerability assessments and mitigation strategies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Section: Animated Steps */}
          <div className="flex-1 relative w-full">
            <div className="relative h-80 sm:h-96 w-full max-w-xl mx-auto lg:max-w-2xl lg:mx-0">
              {steps.map((step, idx) => {
                const isActive = idx === current;
                const { Icon } = step;
                return (
                  <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${isActive ? 'opacity-100 scale-100 translate-x-0' : idx < current ? 'opacity-0 scale-95 -translate-x-8' : 'opacity-0 scale-95 translate-x-8'}`}>
                    <div className="bg-primary/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between relative overflow-hidden group">
                      {/* Step Number Badge */}
                      <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-primary font-bold shadow-lg text-xs sm:text-sm lg:text-base">
                          {step.step}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary/20 rounded-2xl mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                            <Icon className="text-xl sm:text-2xl lg:text-3xl text-secondary animate-pulse" />
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center sm:text-left leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-center sm:text-left px-2 sm:px-0">
                          {step.description}
                        </p>
                      </div>
                      {/* Progress Bar */}
                      <div className="relative mt-auto">
                        <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full transition-all duration-1000" style={{ width: `${((idx + 1) / steps.length) * 100}%` }}></div>
                        </div>
                        <div className="flex justify-between mt-2 px-1">
                          <span className="text-xs sm:text-sm text-white/70">Step {step.step} of {steps.length.toString().padStart(2, '0')}</span>
                          <span className="text-xs sm:text-sm text-secondary font-bold">{Math.round(((idx + 1) / steps.length) * 100)}%</span>
                        </div>
                      </div>
                      {/* Decorative corner */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
              {steps.map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)} className={`rounded-full transition-all duration-300 ${idx === current ? 'bg-secondary w-6 sm:w-8 h-2.5 sm:h-3 shadow-lg' : 'bg-white/30 w-2.5 sm:w-3 h-2.5 sm:h-3 hover:bg-white/50'}`} aria-label={`Go to step ${idx + 1}`} />
              ))}
            </div>
            {/* Timeline for larger screens only */}
            <div className="mt-8 sm:mt-12 hidden lg:block">
              <div className="flex justify-between items-center relative">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${idx <= current ? 'border-secondary bg-secondary text-primary shadow-lg' : 'border-white/30 bg-primary text-white/50'}`}>
                      <span className="text-xs font-bold">{step.step}</span>
                    </div>
                    <span className="text-xs text-white/70 mt-2 text-center max-w-16">{step.title.split(' ')[0]}</span>
                  </div>
                ))}
                {/* Connection Line */}
                <div className="absolute top-4 lg:top-5 left-4 lg:left-5 right-4 lg:right-5 h-0.5 bg-white/20">
                  <div className="h-full bg-gradient-to-r from-secondary to-secondary/80 transition-all duration-500" style={{ width: `${(current / (steps.length - 1)) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section: Process Cycle Component */}
          <div className="flex-1 mt-6 sm:mt-8 lg:mt-0 w-full">
            <div className="lg:sticky lg:top-8">
              <PenetrationTestingCycle />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 sm:w-40 sm:h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
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
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PenetrationTestingProcess;
