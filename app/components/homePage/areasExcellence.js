"use client";
import React, { useState } from 'react';
import Link from "next/link";

const AreasExcellence = () => {
  const expertiseAreas = [
    { icon: '/AreasExcellenceICON/aiIcon.svg', name: 'AI Consulting', link: '/ai-powered-pdf-translator' },              
    { icon: '/AreasExcellenceICON/generativeICOn.svg', name: 'Generative AI', link: '/generative-ai' },   
    { icon: '/AreasExcellenceICON/MLICON.svg', name: 'Machine Learning', link: '/machine-learning' }, 
    { icon: '/AreasExcellenceICON/Aichatpot.svg', name: 'AI Chatbot Integration', link: '/algorithms-to-agents' },                  
    { icon: '/AreasExcellenceICON/DLICON.svg', name: 'Deep Learning', link: '/deep-learning' },  
    { icon: '/AreasExcellenceICON/CyberICON.svg', name: 'AI in Cybersecurity', link: '/cybersecurity-service' }, 
    { icon: '/AreasExcellenceICON/predictive.svg', name: 'Predictive Analysis', link: '/tweaks-powerful-adaptations' },                                                                               
    { icon: '/AreasExcellenceICON/neuralNtwork.svg', name: 'Neural Networks', link: '/hype-hijack-goal' },  
    { icon: '/AreasExcellenceICON/generativeICOn.svg', name: 'NLP', link: '/revolutionizing-hiring' },  
    { icon: '/AreasExcellenceICON/dataEngICON.svg', name: 'Data Engineering', link: '/model-context-protocol' },                                   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 6));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 6 < expertiseAreas.length ? prev + 6 : prev));
  };

  const visibleAreas = expertiseAreas.slice(currentIndex, currentIndex + 6);

  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 relative bg-primary overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/15 rounded-full animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 relative z-10">
        
        {/* Left Side: Modern Abstract Design */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[400px] md:h-[550px]">
          {/* Main Container */}
          <div className="relative w-full h-full">
            
            {/* Central AI Brain Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central Core */}
                <div className="w-24 h-24 bg-gradient-to-r from-secondary to-secondary/60 rounded-full shadow-2xl shadow-secondary/50 animate-pulse"></div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary/80 rounded-full"></div>
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-3 h-3 bg-secondary/60 rounded-full"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary/80 rounded-full"></div>
                  <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-3 h-3 bg-secondary/60 rounded-full"></div>
                </div>
                
                {/* Outer Ring */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-8 left-8 w-16 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-float">
              <div className="p-2">
                <div className="w-full h-2 bg-secondary/60 rounded mb-1"></div>
                <div className="w-3/4 h-1 bg-white/40 rounded"></div>
              </div>
            </div>
            
            <div className="absolute top-20 right-12 w-14 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-float" style={{animationDelay: '1s'}}>
              <div className="p-2">
                <div className="w-full h-1 bg-secondary/60 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-white/40 rounded"></div>
              </div>
            </div>
            
            <div className="absolute bottom-16 left-16 w-18 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-float" style={{animationDelay: '2s'}}>
              <div className="p-2">
                <div className="w-full h-2 bg-secondary/60 rounded mb-1"></div>
                <div className="w-4/5 h-1 bg-white/40 rounded mb-1"></div>
                <div className="w-3/5 h-1 bg-white/40 rounded"></div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 w-16 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="p-2">
                <div className="w-full h-2 bg-secondary/60 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-white/40 rounded"></div>
              </div>
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{zIndex: -1}}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1ddfea" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#1ddfea" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path d="M80 120 Q200 80 320 160" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
              <path d="M120 200 Q250 180 380 240" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
              <path d="M60 280 Q180 320 300 280" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
            </svg>
          </div>
          
          {/* Floating Animation Keyframes */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              33% { transform: translateY(-10px) rotate(1deg); }
              66% { transform: translateY(5px) rotate(-1deg); }
            }
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 ml-0 md:ml-12 lg:ml-28">
  <div className="-mt-4">
    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight tracking-tight mb-4">
      <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-lg">
        Areas of Excellence
      </span>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-2"></div>
    </h2>
    <p className="text-lg sm:text-xl md:text-lg lg:text-lg xl:text-xl text-white/90 leading-relaxed font-light tracking-wide mb-6">
      We bring <span className="text-white font-medium">innovation to life</span> through 
    </p>
  </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {visibleAreas.map((area, index) => (
              <Link href={area.link} key={index}>
                <div className="flex items-center h-[60px] sm:h-[72px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                  <div className="flex items-center justify-center w-[50px] sm:w-[65px] md:w-[65px] lg:w-[65px] xl:w-[65px] h-[50px] sm:h-[65px] md:h-[65px] lg:h-[65px] xl:h-[65px] mr-3 ml-2">
                    <img
                      src={area.icon}
                      alt={`${area.name} icon`}
                      className="w-8 sm:w-10 md:w-10 lg:w-10 xl:w-10 h-8 sm:h-10 md:h-10 lg:h-10 xl:h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-white font-medium group-hover:text-secondary transition-colors duration-300 flex-1">
                    {area.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-white/80 mb-6">
            Our team is passionate about crafting intelligent solutions to help businesses grow,
            improve efficiency, and stay ahead in today's tech-driven world. Trust us to deliver
            excellence.
          </p>

          {/* Updated Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentIndex === 0 
                  ? 'border-white/30 text-white/30 cursor-not-allowed' 
                  : 'border-secondary text-secondary hover:bg-secondary hover:text-primary hover:scale-110'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-3">
              <span
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'bg-secondary shadow-lg shadow-secondary/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              ></span>
              <span
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentIndex === 6 
                    ? 'bg-secondary shadow-lg shadow-secondary/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              ></span>
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentIndex + 6 >= expertiseAreas.length}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentIndex + 6 >= expertiseAreas.length
                  ? 'border-white/30 text-white/30 cursor-not-allowed' 
                  : 'border-secondary text-secondary hover:bg-secondary hover:text-primary hover:scale-110'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default AreasExcellence;
