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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
        <div className="w-full h-full bg-cover bg-center bg-[url('/landingpages/AICommunityLandin.jpeg')]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ Companies</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Products
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We transform real-world industry experience into{" "}
              <span className="font-semibold text-gray-900">software products</span> that add value
              and address our clients' key business problems.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 transition-all duration-300">
                  {clientSatisfaction}%
                </h3>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 transition-all duration-300">
                  {productsDelivered}+
                </h3>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 transition-all duration-300">
                  {supportAvailable}/7
                </h3>
                <p className="text-sm text-gray-600">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px]">
              {/* Floating Cards */}
              <div className="absolute top-44 right-10 bg-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Fast Performance</h4>
                <p className="text-sm text-gray-600 mt-1">Lightning fast solutions</p>
              </div>

              <div className="absolute bottom-20 left-10 bg-white rounded-2xl shadow-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Secure & Reliable</h4>
                <p className="text-sm text-gray-600 mt-1">Enterprise-grade security</p>
              </div>

              <div className="absolute top-1/2 right-1/3 bg-white rounded-2xl shadow-xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Quality Assured</h4>
                <p className="text-sm text-gray-600 mt-1">Tested & proven solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default ProductLanding;