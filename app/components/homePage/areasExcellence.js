"use client";
import React, { useState } from 'react';

const AreasExcellence = () => {
  const expertiseAreas = [
    { icon: '/AreasExcellenceICON/aiIcon.svg', name: 'AI Consulting' },              
    { icon: '/AreasExcellenceICON/generativeICOn.svg', name: 'Generative AI' },   
    { icon: '/AreasExcellenceICON/MLICON.svg', name: 'Machine Learning' }, 
    { icon: '/AreasExcellenceICON/nlpIcon.svg', name: 'NLP' },                   
    { icon: '/AreasExcellenceICON/DLICON.svg', name: 'Deep Learning' },  
    { icon: '/AreasExcellenceICON/CyberICON.svg', name: 'Cyber Security' }, 
    { icon: '/AreasExcellenceICON/dataEngICON.svg', name: 'Data Engineering' },                                         
    { icon: '/AreasExcellenceICON/predictive.svg', name: 'Predictive Analysis' },                                              
    { icon: '/AreasExcellenceICON/Aichatpot.svg', name: 'AI Chatbots' },                                       
    { icon: '/AreasExcellenceICON/neuralNtwork.svg', name: 'Neural Networks' },                                    
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
    <div
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 relative"
      style={{
        backgroundImage: `url('/areaExcellencebg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16">
        {/* Left Side: Image */}
        <div className="relative">
          <div>
            <img
              src="/areaExcellence.png"
              alt="People working on laptops"
              className="w-[300px] sm:w-[350px] md:w-[450px] h-[300px] sm:h-[400px] md:h-[550px] object-contain"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 ml-0 md:ml-12 lg:ml-28">
          <div className="-mt-4">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-950 mb-2">
              Areas of Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 mb-6">
               we bring innovation to life through 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {visibleAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center h-[60px] sm:h-[72px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                {area.icon.startsWith('/') ? (
                  <img
                    src={area.icon}
                    alt={`${area.name} icon`}
                    className="w-[50px] sm:w-[65px] md:w-[65px] lg:w-[65px] xl:w-[65px] h-[50px] sm:h-[72px] md:h-[72px] lg:h-[72px] xl:h-[72px] mr-3"
                  />
                ) : (
                  <span className="text-2xl mr-3">{area.icon}</span>
                )}
                <span className="text-gray-800 font-medium">{area.name}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            Our team is passionate about crafting intelligent solutions to help businesses grow,
            improve efficiency, and stay ahead in today’s tech-driven world. Trust us to deliver
            excellence.
          </p>

          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              ←
            </button>
            <div className="flex space-x-2">
              <span
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-300'}`}
              ></span>
              <span
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === 6 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-300'}`}
              ></span>
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex + 6 >= expertiseAreas.length}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition ${
                currentIndex + 6 >= expertiseAreas.length ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Straight Line Image - Positioned to Right End at Bottom */}
      <div className="absolute bottom-0 right-0 sm:bottom-0 sm:right-0 lg:bottom-0 lg:right-0">
        <img 
          src="/straightLine.svg" 
          alt="Straight Line Decoration" 
        />
      </div>
    </div>
  );
};

export default AreasExcellence;
