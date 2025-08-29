"use client";
import React from "react";
import Link from "next/link";

const CaseStudiesLanding = () => {
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
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left">
        
        {/* Section Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in">
          <span className="text-secondary text-sm font-medium">— Case Studies —</span>
        </div>

        {/* Enhanced Heading Container */}
        <div className="heading-container pt-7 sm:pt-7 md:pt-10 lg:pt-10 xl:pt-10 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white animate-slide-up animation-delay-200">
            <span className="text-white">Our Company </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Case Study
            </span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4 animate-slide-up animation-delay-400"></div>
        </div>

        {/* Enhanced Paragraph Container */}
        <div className="paragraph-container mb-8 space-y-6">
          <div className="relative animate-slide-up animation-delay-600">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-white/90 pl-6 font-light">
              Transforming <span className=" font-medium">Challenges</span> into <span className=" font-medium">Opportunities</span>.
            </p>
          </div>
          
          <div className="relative pl-6 animate-slide-up animation-delay-800">
            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-white/90 font-light">
              Looking to get similar results?{" "}
              <Link
                href="/contact-ai-solutions"
                className="text-secondary hover:text-secondary/80 underline font-medium transition-colors duration-300 relative group"
              >
                contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>
          </div>
        </div>


        {/* Enhanced Achievement Highlights */}
        <div className="flex flex-wrap gap-4 mt-8 animate-slide-up animation-delay-1200">
          {[
            "AI Solutions",
            "Data Analytics", 
            "Process Automation",
            "Digital Transformation"
          ].map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary rounded-full text-sm font-medium hover:bg-secondary/30 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${1400 + index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesLanding;
