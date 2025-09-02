"use client";
import React from "react";

const OurBlogLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary overflow-hidden">
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
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-0 lg:mt-0 flex flex-col md:flex-row items-center justify-between">
        
        {/* Enhanced Left: Content */}
        <div className="w-full md:w-3/5 text-left animate-slide-up">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-secondary text-sm font-medium">— Knowledge Hub —</span>
          </div>

          <div className="heading-container mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                blogs
              </span>
            </h1>
            
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
          </div>

          <div className="paragraph-container mb-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl leading-relaxed text-white/90 pl-6 font-light">
                Stay updated with the latest <span className=" font-medium">news and insights</span> from our blog.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Right: 3D Blog Model */}
        <div className="w-full md:w-2/5 flex justify-center items-center mt-10 md:mt-0 md:pl-8 lg:pl-16 animate-slide-up animation-delay-400">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-full blur-3xl scale-110"></div>
            
            {/* Main 3D Blog Model Container */}
            <div className="relative w-60 h-80 sm:w-72 sm:h-96 bg-primary/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-secondary/25 group hover:scale-105 transition-all duration-500">
              
              {/* 3D Blog Stack Model */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Stacked Blog Cards */}
                <div className="relative transform-gpu perspective-1000">
                  {/* Back Card */}
                  <div className="absolute w-48 h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl transform rotate-3 translate-y-2 translate-x-2 shadow-lg animate-float animation-delay-2000">
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-20 h-2 bg-secondary/60 rounded-full"></div>
                        <div className="w-32 h-2 bg-white/40 rounded-full"></div>
                        <div className="w-24 h-2 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Middle Card */}
                  <div className="absolute w-48 h-32 bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/30 rounded-2xl transform -rotate-1 translate-y-1 translate-x-1 shadow-xl animate-float animation-delay-1000">
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-24 h-2 bg-secondary/80 rounded-full"></div>
                        <div className="w-36 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-28 h-2 bg-white/50 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Front Card */}
                  <div className="relative w-48 h-32 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-secondary/30 rounded-2xl shadow-2xl hover:shadow-secondary/40 transform hover:rotate-1 transition-all duration-300 animate-float">
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-28 h-2 bg-secondary rounded-full animate-pulse"></div>
                        <div className="w-40 h-2 bg-white/80 rounded-full"></div>
                        <div className="w-32 h-2 bg-white/70 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Blog Icons */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/80 rounded-full flex items-center justify-center animate-bounce-slow">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-bounce-slow animation-delay-1000">
                  <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 animate-slide-up animation-delay-800">
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">50+</div>
          <div className="text-white/70 text-sm">Articles</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">10K+</div>
          <div className="text-white/70 text-sm">Readers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">Weekly</div>
          <div className="text-white/70 text-sm">Updates</div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotate, 0deg));
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

        @keyframes bouncesSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bouncesSlow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
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

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default OurBlogLanding;
