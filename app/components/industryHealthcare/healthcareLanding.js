"use client";
import React from "react";

const HealthcareLanding = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden">
      {/* ==== Background Decorative Circles ==== */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full" />
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full" />
      </div>

      {/* ==== Floating Dots ==== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping" />
      </div>

      {/* ==== Main Content ==== */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left">
        {/* Badge */}
        <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Healthcare Innovation
        </div>

        {/* Heading */}
        <div className="heading-container mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            AI in{" "}
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Healthcare
            </span>
          </h1>
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
        </div>

        {/* Paragraph */}
        <div className="paragraph-container max-w-3xl">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light pl-4 border-l-4 border-secondary/50">
            Explore how technology is transforming the face of healthcare — from
            faster diagnoses to better treatment plans. AI is helping doctors and
            hospitals make smarter decisions, reduce errors, and deliver more
            <span className="text-secondary font-medium"> personalized care</span>,
            improving patient outcomes worldwide.
          </p>
        </div>
      </div>

      {/* ==== Bottom Decoration ==== */}
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

export default HealthcareLanding;
