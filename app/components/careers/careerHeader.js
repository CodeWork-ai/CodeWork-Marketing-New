"use client";
import React from "react";
import Link from "next/link";

const CareersHeader = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden px-4 py-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-16 h-16 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pl-20  pt-20 text-center lg:text-left">
        
        {/* Enhanced Heading */}
        <div className="heading-container mb-8 md:mb-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-white">Join Our </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-20 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-6 mx-auto lg:mx-0"></div>
        </div>

        {/* Reduced Text Content */}
        <div className="paragraph-container mb-10 md:mb-12 max-w-4xl mx-auto lg:mx-0">
          <div className="relative mb-6 md:mb-8">
            <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white/90 lg:pl-8 font-light">
              Shape the future with <span className="">AI technology</span>. 
              Join our team of <span className="">innovators</span>.
            </p>
          </div>

          {/* Enhanced About Us Link */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
            <p className="text-base sm:text-lg md:text-lg text-white/90 mb-3 md:mb-4">
              Want to know our story?
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-6 py-3 md:px-6 md:py-3 rounded-xl hover:from-secondary/90 hover:to-secondary hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">About Us</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </div>
        </div>

        {/* Simple Statistics - No Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">50+</div>
            <div className="text-white/70 text-sm md:text-base">Team Members</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">Remote</div>
            <div className="text-white/70 text-sm md:text-base">Work Options</div>
          </div>
          <div className="text-center lg:text-left col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">AI</div>
            <div className="text-white/70 text-sm md:text-base">Innovation</div>
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

export default CareersHeader;
