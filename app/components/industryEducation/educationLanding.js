"use client";
import React from "react";

const EducationLanding = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
      </div>

      {/* Floating Animated Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left">
        {/* Section Badge */}
        <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Education Transformation
        </div>

        {/* Heading */}
        <div className="heading-container mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            AI in{" "}
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
        </div>

        {/* Paragraph */}
        <div className="paragraph-container max-w-3xl">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light pl-4 border-l-4 border-secondary/50">
            AI is revolutionizing the education sector by personalizing learning, streamlining administration, and providing actionable insights. It helps educators deliver tailored content, improve student engagement, and forecast learning outcomes with greater accuracy.
          </p>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/40 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default EducationLanding;
