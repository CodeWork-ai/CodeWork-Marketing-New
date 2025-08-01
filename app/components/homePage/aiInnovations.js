"use client";
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaLock, FaShoppingCart, FaHeartbeat, FaDollarSign, FaBook, FaTruck } from "react-icons/fa";

const AiInnovations = () => {
  const cards = [
    {
      id: 1,
      title: "Data Security",
      description: "We protect sensitive information with advanced anomaly detection and robust, decentralized security protocols.",
      bgImage: "/AiInnovations/DataSecurity.png",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "We redefine online shopping with predictive analytics for smarter recommendations.",
      bgImage: "/AiInnovations/Ecommerce.png",
    },
    {
      id: 3,
      title: "Healthcare",
      description: "We elevate patient care with AI-driven diagnostics and secure management of Electronic Health Records (EHR).",
      bgImage: "/AiInnovations/Healthcare.png",
    },
    {
      id: 4,
      title: "Finance",
      description: "We enhance financial systems with AI-powered fraud detection and credit risk analysis.",
      bgImage: "/AiInnovations/Finance.png",
    },
    {
      id: 5,
      title: "Education",
      description: "We personalize learning experiences with adaptive AI platforms and blockchain certification.",
      bgImage: "/AiInnovations/Education.png",
    },
    {
      id: 6,
      title: "SupplyChain",
      description: "We optimize operations and boost transparency with smart contract-enabled systems for seamless supply chain management.",
      bgImage: "/AiInnovations/SupplyChain.png",
    }
  ];

  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="w-full pl-4 sm:pl-8 md:pl-14 mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        
        {/* Enhanced Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm">
            <span className="text-secondary text-sm font-medium">— Industry Solutions —</span>
          </div>

          {/* Enhanced Title */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-white">AI </span>
            <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Innovations
            </span>
            <span className="text-white"> and Applications</span>
          </h2>

          {/* Enhanced Description */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed pl-6">
              Cutting-edge <span className="text-secondary font-medium">AI solutions</span> to accelerate various industries by driving 
              automation, enhancing intelligence systems, and transforming 
              <span className="text-secondary font-medium"> operational efficiency</span>.
            </p>
          </div>
        </div>

        {/* Enhanced Marquee Carousel */}
        <div className="w-full md:w-[60%]">
          <Marquee pauseOnHover speed={40} gradient={false}>
            {cards.map((card) => (
              <div key={card.id} className="px-4">
                <div 
                  className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] bg-center bg-cover rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 shadow-2xl"
                  style={{ backgroundImage: `url('${card.bgImage}')` }}
                >
                  {/* Enhanced Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-t group-hover:from-secondary/90 group-hover:to-primary/80 transition-all duration-500"></div>

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-500"></div>

                  {/* Icon and text container */}
                  <div className="absolute inset-0 flex flex-col pl-8 sm:pl-12 pt-16 sm:pt-24 items-start justify-start text-white p-4 relative z-10">
                    
                    {/* Enhanced Gradient Definitions */}
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <linearGradient id={`grad-${card.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: "#1ddfea" }} />
                          <stop offset="50%" style={{ stopColor: "#00bcd4" }} />
                          <stop offset="100%" style={{ stopColor: "#26c6da" }} />
                        </linearGradient>
                        <linearGradient id={`grad-hover-${card.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: "#050c25" }} />
                          <stop offset="100%" style={{ stopColor: "#0a1a40" }} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Enhanced Icon with improved hover effects */}
                    <div className="mb-4 transform transition-all duration-300 group-hover:scale-110">
                      {card.title === "Data Security" && (
                        <>
                          <FaLock size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaLock size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                      {card.title === "E-commerce" && (
                        <>
                          <FaShoppingCart size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaShoppingCart size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                      {card.title === "Healthcare" && (
                        <>
                          <FaHeartbeat size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaHeartbeat size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                      {card.title === "Finance" && (
                        <>
                          <FaDollarSign size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaDollarSign size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                      {card.title === "Education" && (
                        <>
                          <FaBook size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaBook size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                      {card.title === "SupplyChain" && (
                        <>
                          <FaTruck size={56} className="block group-hover:hidden drop-shadow-lg" fill={`url(#grad-${card.id})`} />
                          <FaTruck size={56} className="hidden group-hover:block drop-shadow-lg" fill={`url(#grad-hover-${card.id})`} />
                        </>
                      )}
                    </div>

                    {/* Enhanced Title and Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold block group-hover:hidden text-white drop-shadow-lg">
                        {card.title}
                      </h3>
                      <div className="hidden group-hover:block transform transition-all duration-500 ease-out">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 drop-shadow-lg">
                          {card.title}
                        </h3>
                        <p className="text-primary/90 text-sm sm:text-base leading-relaxed font-medium">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Floating Accent Dot */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>

                  {/* Card Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* CSS Animations */}
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

export default AiInnovations;
