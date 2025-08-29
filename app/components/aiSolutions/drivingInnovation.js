"use client";
import React from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import {
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiJava,
  SiR,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiTypescript,
  SiPostgresql
} from 'react-icons/si';

const DrivingInnovation = () => {
  // Enhanced Technology Icons Data with fallback handling
  const technologyIcons = [
    { name: "MongoDB", Icon: SiMongodb },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Python", Icon: SiPython },
    { name: "Java", Icon: SiJava },
    { name: "R Language", Icon: SiR },
    { name: "Azure", Icon: SiMicrosoftazure },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "GraphQL", Icon: SiGraphql },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "PostgreSQL", Icon: SiPostgresql },
  ];

  return (
    <section className="bg-primary w-full py-16 pt-8 relative sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
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

      {/* Enhanced Main Content */}
      <div className="px-4 pt-20 flex w-full justify-center relative z-10">
        <div className="w-full px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-24">
          
          {/* Left Side: Enhanced Text Content */}
          <div className="w-full md:w-[65%] space-y-6 sm:space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm">
              <span className="text-secondary text-sm font-medium">— Our Excellence —</span>
            </div>

            {/* Enhanced Title */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span className="text-white">Driving </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Innovation
              </span>
              <span className="text-white"> with Excellence</span>
            </h2>

            {/* Simplified Description */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed pl-6 font-light">
                We deliver <span className="text-secondary font-medium">intelligent solutions</span> that drive business growth and innovation 
                through advanced AI technologies.
              </p>
            </div>
          </div>

          {/* Right Side: Enhanced Image */}
          <div className="w-full md:w-[35%] relative">
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-secondary/40 rounded-3xl blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 hover:transform hover:scale-105 transition-all duration-500 group">
                <Image
                  src="/AiSolution/RightSide.png"
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

      {/* Enhanced Technology Showcase Section */}
      <div className="relative mt-20 min-h-[40vh] sm:min-h-[50vh] flex items-end">
        <div className="w-full mx-auto text-center relative z-10">
          
          {/* Enhanced Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
              <span className="text-secondary text-sm font-medium">— Technology Stack —</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-white">Technologies We </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Master
              </span>
            </h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Powered by the latest technologies and frameworks for cutting-edge solutions
            </p>
          </div>

          {/* Enhanced Technology Container with Equal Sized Cards */}
          <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 w-full min-h-[200px] sm:min-h-[240px] p-8 sm:p-10 md:p-12 rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[140px] sm:rounded-tr-[140px] shadow-2xl">
            
            {/* Multiple glowing effects */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
            
            {/* Enhanced Marquee with Equal Sized Cards */}
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover
              direction="left"
              loop={0}
              className="py-8"
            >
              {technologyIcons.map((tech, index) => {
                const IconComponent = tech.Icon;
                
                // Safety check to ensure icon exists
                if (!IconComponent) {
                  return null;
                }

                return (
                  <div key={index} className="mx-6 sm:mx-8 flex flex-col items-center justify-center group">
                    {/* Fixed size container for all cards */}
                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 flex flex-col items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-secondary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-secondary/25">
                      
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Technology Icon - Fixed position */}
                      <div className="flex-shrink-0 mt-2">
                        <IconComponent 
                          size={32} 
                          className="relative z-10 transition-all duration-500 group-hover:scale-110"
                          style={{ 
                            color: '#1ddfea', // Your secondary color
                            filter: 'drop-shadow(0 0 8px rgba(29, 223, 234, 0.4))'
                          }}
                        />
                      </div>
                      
                      {/* Technology Name - Always visible and centered */}
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-xs font-semibold text-white tracking-wide text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>

                      {/* Floating indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                  </div>
                );
              })}
            </Marquee>

            {/* Enhanced floating tech particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-6 left-12 w-2 h-2 bg-secondary/60 rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute top-12 right-16 w-1 h-1 bg-white/60 rounded-full animate-ping animation-delay-600"></div>
              <div className="absolute bottom-8 left-20 w-3 h-3 bg-secondary/40 rounded-full animate-bounce animation-delay-900"></div>
              <div className="absolute bottom-6 right-12 w-1 h-1 bg-white/50 rounded-full animate-pulse animation-delay-1200"></div>
              <div className="absolute top-1/2 left-8 w-2 h-2 bg-secondary/30 rounded-full animate-ping animation-delay-1500"></div>
              <div className="absolute top-1/3 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce animation-delay-1800"></div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[140px] sm:rounded-tr-[140px] pointer-events-none"></div>
          </div>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-1800 {
          animation-delay: 1.8s;
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

export default DrivingInnovation;
