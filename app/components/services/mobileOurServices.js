"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaGlobe,
  FaUsers,
  FaLock,
  FaBullhorn,
} from "react-icons/fa";
import { BiSync } from "react-icons/bi";

const MobileOurServices = () => {
  const services = [
    { title: "AI Model Training & Fine Tuning", icon: FaBrain, link: "/ai-model-training" },
    { title: "AI Driven Custom Software Development", icon: FaCode, link: "/custom-software-development" },
    { title: "DevOps Solutions", icon: BiSync, link: "/devops-solutions" },
    { title: "Cloud Computing", icon: FaCloud, link: "/cloud-computing" },
    { title: "AI Automation", icon: FaDatabase, link: "/ai-automation" },
    { title: "Agentic AI", icon: FaMobile, link: "/agentic-ai" },
    { title: " AI Cybersecurity Services", icon: FaShieldAlt, link: "/cybersecurity-service" },    
    { title: "IT Staff Augmentation", icon: FaUsers, link: "/it-staff-service" },
    { title: "AI Implementation", icon: FaLock, link: "/ai-implementation" },
    { title: " AI in Digital Marketing Services", icon: FaBullhorn, link: "/digital-marketing-services" },
          { title: "Professional Annotation Services", link: "/annotation-services" },

  ];

  const totalPages = 2;
  const [page, setPage] = useState(0);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  const visible =
    page === 0 ? services.slice(0, 5) : services.slice(5, services.length);

  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 relative bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-12 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-24 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 relative z-10">
        <div className="w-full lg:w-1/2 ml-0 md:ml-12 lg:ml-28">
          
          {/* Enhanced Header Section */}
          <div className="mb-8">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-4 animate-fade-in">
              <span className="text-secondary text-sm font-medium">— Our Services —</span>
            </div>

            {/* Enhanced Title */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 animate-slide-up">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {visible.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center space-x-4 pt-11 h-[70px] animate-card-slide-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Enhanced Icon */}
                  <div className="flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-br from-secondary to-secondary/80 rounded-full shadow-xl shadow-secondary/25 hover:scale-110 transition-all duration-300 animate-float">
                    <Icon className="w-[36px] h-[36px] text-primary" />
                  </div>

                  {/* Enhanced Title pill with glass-morphism */}
                  <Link href={svc.link}>
                    <span className="relative bg-white/10 backdrop-blur-sm border border-white/20 w-60 h-[70px] flex items-center justify-center transition-all duration-300 text-white font-medium text-lg rounded-r-full hover:bg-white/20 hover:border-secondary/30 hover:scale-105 group">
                      {/* Enhanced Left arrow decoration - FIXED */}
                      <span className="hidden xs:block absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-r-[15px] border-r-white/10 group-hover:border-r-white/20 transition-all duration-300" />
                      
                      <span className="group-hover:text-secondary transition-colors duration-300">
                        {svc.title}
                      </span>
                      
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"></div>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Enhanced Description */}
          <div className="relative mb-8">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
            <p className="text-white/90 pt-8 mb-6 pl-6 text-base sm:text-lg leading-relaxed animate-slide-up animation-delay-400">
              With <span className="text-secondary font-medium">Codework</span>, adopting technology means embracing innovation with a personal touch. 
              Our commitment to excellence ensures every project is delivered with <span className="text-secondary font-medium">precision and care</span>.
            </p>
          </div>

          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-secondary/25 ${
                page === 0 ? "opacity-50 cursor-not-allowed scale-100" : "hover:opacity-90"
              }`}
            >
              ←
            </button>
            
            {/* Enhanced Pagination Dots */}
            <div className="flex space-x-3">
              {[0, 1].map((dot) => (
                <span
                  key={dot}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    page === dot
                      ? "bg-gradient-to-r from-secondary to-secondary/80 scale-125 shadow-lg shadow-secondary/25"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-secondary/25 ${
                page === totalPages - 1 ? "opacity-50 cursor-not-allowed scale-100" : "hover:opacity-90"
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
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
            transform: translateY(-4px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 6s infinite;
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-card-slide-in {
          animation: cardSlideIn 0.6s ease-out;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default MobileOurServices;
