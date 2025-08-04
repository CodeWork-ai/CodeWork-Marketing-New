"use client";
import React from "react";
import Link from "next/link";

const IndustriesLanding = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden px-16 py-8">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Content Section */}
        <div className="w-full lg:w-2/3 text-center pt-32 lg:text-left">
          {/* Section Badge */}
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-secondary text-xs md:text-sm font-medium">— Industry Solutions —</span>
          </div>

          {/* Enhanced Heading */}
          <div className="heading-container mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-white">Smart Tech for </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-16 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4 md:mt-6 mx-auto lg:mx-0"></div>
          </div>

          {/* Enhanced Paragraph */}
          <div className="paragraph-container mb-8 md:mb-12">
            <div className="relative mb-6 md:mb-8">
              <div className="absolute -left-2 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-base sm:text-lg md:text-lG lg:text-lG leading-relaxed text-white/90 lg:pl-6 font-light">
                Tailored <span className=" font-medium">digital solutions</span> for healthcare, education, finance, e-commerce, and cybersecurity. 
                <span className=" font-medium"> Innovation meets expertise</span> to drive your success.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 md:mb-4">
                Need AI for your field?
              </p>
              <Link 
                href="/ai-services" 
                className="inline-flex items-center bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base hover:from-secondary/90 hover:to-secondary hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Services</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Visual Section - Industry Icons Grid */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-2xl md:blur-3xl scale-110"></div>
            
            {/* Main Industry Grid Container */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-primary/20 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-secondary/25 group hover:scale-105 transition-all duration-500">
              
              {/* Industry Icons Grid */}
              <div className="absolute inset-0 p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 h-full">
                  {/* Healthcare */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-secondary/20 flex flex-col items-center justify-center p-2 md:p-3 lg:p-4 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/80 rounded-full flex items-center justify-center mb-1 md:mb-2 lg:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4zM4 10h5v2h2v-2h1V8H4zM4 14h5v2h2v-2h1v-2H4z"/>
                      </svg>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">Health</span>
                  </div>

                  {/* Education */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-secondary/20 flex flex-col items-center justify-center p-2 md:p-3 lg:p-4 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/80 rounded-full flex items-center justify-center mb-1 md:mb-2 lg:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">Education</span>
                  </div>

                  {/* Finance */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-secondary/20 flex flex-col items-center justify-center p-2 md:p-3 lg:p-4 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/80 rounded-full flex items-center justify-center mb-1 md:mb-2 lg:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                      </svg>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">Finance</span>
                  </div>

                  {/* E-commerce */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-secondary/20 flex flex-col items-center justify-center p-2 md:p-3 lg:p-4 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/80 rounded-full flex items-center justify-center mb-1 md:mb-2 lg:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium">Commerce</span>
                  </div>
                </div>

                {/* Center Connecting Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  <circle cx="150" cy="150" r="60" fill="none" stroke="rgba(29, 223, 234, 0.2)" strokeWidth="1" strokeDasharray="5,5" className="md:r-80" />
                  <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(29, 223, 234, 0.1)" strokeWidth="1" strokeDasharray="3,7" className="md:r-100" />
                </svg>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 md:border-l-4 md:border-t-4 border-secondary rounded-tl-lg"></div>
              <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 md:border-r-4 md:border-b-4 border-secondary rounded-br-lg"></div>

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

export default IndustriesLanding;
