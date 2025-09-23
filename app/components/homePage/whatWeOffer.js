"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import AI-related icons
import { RiAiGenerate, RiRobot2Fill, RiBrainLine } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";

const WhatWeOffer = () => {
  return (
    <section className="bg-primary w-full py-9 pt-8 relative sm:py-12 md:py-14 lg:py-14 xl:py-14 overflow-hidden">
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

      <div className="px-4 pt-20 flex w-full justify-center relative z-10">
        <div className="w-full px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-24">
          
          {/* Left Side: Enhanced Text Content (65% width) */}
          <div className="w-full md:w-[65%] space-y-6 sm:space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm">
              <span className="text-secondary text-sm font-medium">— Our Services —</span>
            </div>

            {/* Main Heading with Gradient */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white">What do we </span>
              <span className="text-secondary">Offer?</span>
            </h2>

            {/* Enhanced Description */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-base text-white sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal leading-relaxed">
                Codework redefines possibilities with cutting-edge AI services
                designed to empower businesses in the digital era. From AI model
                training that enhances system intelligence to custom software
                development tailored to unique needs, excellence is delivered at
                every step.
              </p>
            </div>

            {/* Feature Highlights with React Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { 
                  icon: <RiRobot2Fill className="text-2xl text-secondary group-hover:text-white transition-colors duration-300" />, 
                  title: "AI Model Training", 
                  desc: "Smarter models, better outcomes",
                  link: "/ai-model-training"
                },
                { 
                  icon: <GiArtificialIntelligence className="text-2xl text-secondary group-hover:text-white transition-colors duration-300" />, 
                  title: "AI Driven Custom Software Development", 
                  desc: "Tailored solutions powered by AI",
                  link: "/custom-software-development"
                },
                { 
                  icon: <RiAiGenerate className="text-2xl text-secondary group-hover:text-white transition-colors duration-300" />, 
                  title: "AI Automation", 
                  desc: "Streamline tasks, boost efficiency",
                  link: "/ai-automation"
                },
                { 
                  icon: <RiBrainLine className="text-2xl text-secondary group-hover:text-white transition-colors duration-300" />, 
                  title: "Agentic AI",
                  desc: "Autonomous intelligence for action",
                  link: "/agentic-ai"
                }
              ].map((feature, index) => (
                <Link href={feature.link} key={index} className="block">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                      <p className="text-white/90 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Button Container with Fixed className */}
            <div className="button-container mb-6 sm:mb-8">
              <Link href="/ai-services">
                <button
                  type="button"
                  className="flex justify-center gap-3 sm:gap-4 items-center shadow-xl text-sm bg-transparent backdrop-blur-md font-medium isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-primary before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 overflow-hidden border-2 rounded-full group text-white text-xs sm:text-sm md:text-base"
                >
                  Explore Our Services
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-0.5 sm:p-1 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-primary"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Enhanced Image with Creative Frame (35% width) */}
          <div className="w-full md:w-[35%] relative">
            {/* Decorative Frame */}
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-secondary/40 rounded-3xl blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 hover:transform hover:scale-105 transition-all duration-500 group">
                <Image
                  src="/WhatweOffer.png"
                  alt="Team working"
                  width={700}
                  height={600}
                  className="w-full h-auto rounded-2xl group-hover:brightness-110 transition-all duration-500"
                />
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 left-0 opacity-30">
        <div className="w-64 h-32 bg-gradient-to-r from-secondary/20 to-transparent rounded-tr-full"></div>
      </div>

      {/* Animated CSS */}
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhatWeOffer;
