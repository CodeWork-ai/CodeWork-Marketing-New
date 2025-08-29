"use client";
import React, { useState, useEffect } from "react";

const ProductLanding = () => {
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [productsDelivered, setProductsDelivered] = useState(0);
  const [supportAvailable, setSupportAvailable] = useState(0);

  useEffect(() => {
    const animateNumber = (target, setState, duration) => {
      const start = 0;
      const increment = target / (duration / 50); // Increment every 50ms
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setState(Math.floor(current));
      }, 50);

      return () => clearInterval(timer);
    };

    // Start animations for each stat
    animateNumber(100, setClientSatisfaction, 2500); // 2.5s duration
    animateNumber(50, setProductsDelivered, 2500);
    animateNumber(24, setSupportAvailable, 2500);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden pt-16">
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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 ml-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm shadow-lg">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-secondary">Trusted by 500+ Companies</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            {/* Decorative underline */}
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto lg:mx-0"></div>

            {/* Description */}
            <div className="relative">
              <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
              <p className="text-lg sm:text-lg md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:pl-8 font-light">
                We transform real-world industry experience into{" "}
                <span className="font-semibold text-secondary">software products</span> that add value
                and address our clients' key business problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary transition-all duration-300">
                  {clientSatisfaction}%
                </h3>
                <p className="text-xs sm:text-sm text-white/70">Client Satisfaction</p>
              </div>
              <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary transition-all duration-300">
                  {productsDelivered}+
                </h3>
                <p className="text-xs sm:text-sm text-white/70">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary transition-all duration-300">
                  {supportAvailable}/7
                </h3>
                <p className="text-xs sm:text-sm text-white/70">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px]">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110 opacity-60"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-44 right-10 bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-secondary/25 p-6 transform rotate-3 hover:rotate-0 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">Fast Performance</h4>
                <p className="text-sm text-white/80 mt-1">Lightning fast solutions</p>
              </div>

              <div className="absolute bottom-20 left-10 bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-secondary/25 p-6 transform -rotate-3 hover:rotate-0 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">Secure & Reliable</h4>
                <p className="text-sm text-white/80 mt-1">Enterprise-grade security</p>
              </div>

              <div className="absolute top-1/2 right-1/3 bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-secondary/25 p-6 transform rotate-6 hover:rotate-0 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white group-hover:text-secondary transition-colors duration-300">Quality Assured</h4>
                <p className="text-sm text-white/80 mt-1">Tested & proven solutions</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default ProductLanding;
