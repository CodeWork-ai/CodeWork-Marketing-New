"use client";
import React from "react";
import Link from "next/link";

const ServiceLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Container with enhanced overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Enhanced overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-primary/90"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      {/* Enhanced Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-16 lg:mt-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Enhanced Content with Reduced Text */}
        <div className="w-full md:w-3/5 text-left space-y-6">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm">
            <span className="text-secondary text-sm font-medium">— AI Services —</span>
          </div>

          {/* Enhanced Heading */}
          <div className="heading-container">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
              <span className="text-white">Driving </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="text-white">Through </span>
              <span className="text-secondary">AI Services</span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
          </div>

          {/* Reduced Paragraph Content */}
          <div className="paragraph-container space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-white/90 pl-6 font-light">
                We offer <span className=" font-medium">cutting-edge AI services</span> that empower businesses with 
                <span className=" font-medium"> tailored, efficient, and accurate</span> solutions.
              </p>
            </div>
            
            <div className="relative pl-6">
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-white/90 font-light">
                <Link
                  href="/our-company-case-studies"
                  className="text-secondary hover:text-secondary/80 underline font-medium transition-colors duration-300 relative group"
                >
                  Discover our success stories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {" "}in business development through AI.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Fixed Creative Animated Element */}
        <div className="w-full md:w-2/5 flex justify-center items-center mt-10 md:mt-0 md:pl-8 lg:pl-16">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 aspect-square">
            
            {/* Main Animated Container */}
            <div className="relative w-full h-full">
              
              {/* Rotating Outer Ring - Fixed to be perfectly circular */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full border-4 border-transparent border-t-secondary border-r-secondary/60 rounded-full"></div>
              </div>
              
              {/* Counter Rotating Middle Ring - Fixed to be perfectly circular */}
              <div className="absolute inset-4 animate-spin-reverse">
                <div className="w-full h-full border-2 border-transparent border-l-white/40 border-b-white/60 rounded-full"></div>
              </div>
              
              {/* Central AI Core - Ensured circular */}
              <div className="absolute inset-8 bg-gradient-to-br from-secondary/30 to-secondary/60 rounded-full backdrop-blur-sm border border-secondary/30 shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full"></div>
                
                {/* AI Brain Pattern - Fixed symmetrical positioning */}
                <div className="absolute inset-6 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Node */}
                    <div className="w-16 h-16 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50"></div>
                    
                    {/* Connection Lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-0.5 bg-gradient-to-r from-secondary to-transparent rotate-45 absolute"></div>
                      <div className="w-32 h-0.5 bg-gradient-to-r from-secondary to-transparent -rotate-45 absolute"></div>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-transparent rotate-90 absolute"></div>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-transparent absolute"></div>
                    </div>
                    
                    {/* Surrounding Nodes - Fixed symmetrical positioning */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce animation-delay-1000"></div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce animation-delay-2000"></div>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                      <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce animation-delay-3000"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Service Icons - Fixed positioning around circle */}
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <div className="w-12 h-12 bg-secondary/60 rounded-lg rotate-12 animate-float shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
                <div className="w-10 h-10 bg-white/40 rounded-full animate-bounce animation-delay-2000 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-transparent rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">ML</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-secondary/80 rounded-lg animate-float animation-delay-1000 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">NLP</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-white/50 rounded-full animate-bounce animation-delay-3000 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-transparent rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">CV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ServiceLanding;
