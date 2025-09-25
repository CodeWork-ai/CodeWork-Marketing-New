"use client";
import React from 'react';
import Image from 'next/image';

const PartnerWithCodework = () => (
  <section className="relative bg-primary min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-24 w-24 h-24 bg-secondary/15 rounded-full"></div>
      <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
      <div className="absolute top-2/3 right-0 w-32 h-32 bg-secondary/12 rounded-full"></div>
    </div>

    {/* Floating Dots */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-48 right-8 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Column */}
        <div className="w-full lg:w-1/2 lg:max-w-2xl">
          {/* Section Badge */}
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Partnership Excellence
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Why Partner with <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">Codework?</span>
          </h2>

          {/* Decorative underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-6"></div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-xl text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
              We don't just label data—we ensure your datasets are high-quality, consistent, and ready for AI adoption. Our secure processes, skilled workforce, and advanced tools make us a trusted partner for businesses seeking reliable Annotation Services.
            </p>
            
            <p className="text-xl text-white/90 leading-relaxed pl-4 border-l-4 border-secondary/40">
              With Codework, you get more than data annotation—you get the foundation for building smarter, future-ready AI solutions.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-auto lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:-mr-12 xl:-mr-20 2xl:-mr-20">
          <div className="relative">
            {/* Primary color overlay with low opacity */}
            <div className="absolute inset-0 bg-primary opacity-20 rounded-2xl"></div>
            <Image
              src="/AllServices/Cybersecurity.svg"
              alt="Professional annotation services illustration"
              width={600}
              height={600}
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto block relative z-10 filter drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Decoration */}
    <div className="absolute bottom-0 right-0 opacity-20">
      <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
    </div>

    {/* Animation Styles */}
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

export default PartnerWithCodework;
