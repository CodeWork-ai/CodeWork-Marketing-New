"use client";
import React from "react";

const InternshipHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Section: Content */}
          <div className="flex-1 text-center pt-16 pl-20 lg:text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 pt-20 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
              <span className="text-secondary text-xs font-medium">— Internship Program —</span>
            </div>

            {/* Enhanced Heading */}
            <div className="heading-container mb-8 md:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Kickstart Your Career with Our{" "}
                <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                  Internship Program
                </span>
              </h1>
              
              {/* Decorative underline */}
              <div className="w-20 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-6 mx-auto lg:mx-0"></div>
            </div>

            {/* Enhanced Paragraph - INCREASED WIDTH */}
            <div className="paragraph-container mb-8 md:mb-10 max-w-3xl mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed lg:pl-8 font-light">
                  Are you ready to gain real-world experience in <span className="text-secondary font-medium">AI and technology</span>?
                  Join our internship program at Codework, where you'll learn, grow,
                  and contribute to <span className="text-secondary font-medium">exciting projects</span>. Apply now and take the first
                  step toward your future!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: 3D Animated Visual */}
          <div className="flex-1 flex justify-center items-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110"></div>
              
              {/* Main 3D Container */}
              <div className="relative w-full h-full">
                {/* Floating Geometric Shapes - 3D Effect */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-2xl shadow-secondary/50 transform rotate-12 hover:rotate-45 transition-transform duration-1000 animate-pulse">
                  <div className="absolute inset-2 bg-white/20 rounded-xl"></div>
                </div>

                <div className="absolute top-1/4 right-8 w-16 h-16 bg-gradient-to-br from-secondary/80 to-secondary rounded-full shadow-xl shadow-secondary/40 transform -rotate-12 hover:rotate-12 transition-transform duration-1000 animate-bounce">
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>

                <div className="absolute bottom-1/4 left-6 w-24 h-24 bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl shadow-2xl shadow-secondary/50 transform rotate-45 hover:rotate-90 transition-transform duration-1000">
                  <div className="absolute inset-3 bg-white/25 rounded-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                </div>

                <div className="absolute bottom-10 right-12 w-18 h-18 bg-gradient-to-br from-secondary/90 to-secondary rounded-xl shadow-xl shadow-secondary/40 transform -rotate-45 hover:-rotate-90 transition-transform duration-1000 animate-pulse">
                  <div className="absolute inset-2 bg-white/20 rounded-lg"></div>
                </div>

                {/* Central Focus Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 rounded-3xl shadow-2xl shadow-secondary/60 hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-4 bg-white/30 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full animate-spin">
                      <div className="w-full h-full bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary/80 rounded-full animate-pulse"></div>
                </div>

                {/* Connecting Lines - 3D Effect */}
                <div className="absolute top-16 left-16 w-24 h-0.5 bg-gradient-to-r from-secondary to-transparent transform rotate-45 opacity-60 animate-pulse"></div>
                <div className="absolute bottom-16 right-16 w-20 h-0.5 bg-gradient-to-l from-secondary to-transparent transform -rotate-45 opacity-60 animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-16 h-0.5 bg-gradient-to-r from-secondary/80 to-transparent opacity-60 animate-pulse"></div>

                {/* Floating Particles */}
                <div className="absolute top-8 right-4 w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-secondary/80 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default InternshipHeader;
