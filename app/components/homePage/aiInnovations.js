import React from 'react';
import Marquee from "react-fast-marquee";
import { FaLock, FaShoppingCart, FaHeartbeat, FaDollarSign, FaBook, FaTruck } from "react-icons/fa";

const AiInnovations = () => {
  const cards = [
    {
      id: 1,
      title: "Data Security",
      description: "We protect sensitive information with advanced anomaly detection and robust, decentralized security protocols.",
      bgImage: "/AiInnovations/DataSecurity.svg",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "We redefine online shopping with predictive analytics for smarter recommendations.",
      bgImage: "/AiInnovations/Ecommerce.svg",
    },
    {
      id: 3,
      title: "Healthcare",
      description: "We elevate patient care with AI-driven diagnostics and secure management of Electronic Health Records (EHR).",
      bgImage: "/AiInnovations/Healthcare.svg",
    },
    {
      id: 4,
      title: "Finance",
      description: "We enhance financial systems with AI-powered fraud detection and credit risk analysis.",
      bgImage: "/AiInnovations/Finance.svg",
    },
    {
      id: 5,
      title: "Education",
      description: "We personalize learning experiences with adaptive AI platforms and blockchain certification.  ",
      bgImage: "/AiInnovations/Education.svg",
    },
    {
      id: 6,
      title: "SupplyChain",
      description: "We optimize operations and boost transparency with smart contract-enabled systems for seamless supply chain management.",
      bgImage: "/AiInnovations/SupplyChain.svg",
    }
  ];

  return (
    // Make the section relative so the absolutely positioned image can be placed at the bottom-right
    <section className="bg-[#F6F5FF] py-12 relative">
      <div className="w-full pl-4 sm:pl-8 md:pl-14 mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-800">
            AI innovations and applications
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Cutting-edge AI solutions to accelerate various industries by driving 
            automation, enhancing intelligence systems, and transforming 
            operational efficiency.
          </p>
        </div>

        {/* Marquee Carousel */}
        <div className="w-full md:w-[60%]">
          <Marquee pauseOnHover speed={50} gradient={false}>
            {cards.map((card) => (
              <div key={card.id} className="px-7">
                <div 
                  className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] bg-center bg-cover rounded-2xl overflow-hidden group"
                  style={{ backgroundImage: `url('${card.bgImage}')` }}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-t group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-300"></div>

                  {/* Icon and text container */}
                  <div className="absolute inset-0 flex flex-col pl-8 sm:pl-12 pt-16 sm:pt-24 items-start justify-start text-white p-4">
                    {/* Define the gradient for the default icon */}
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <linearGradient id={`grad-${card.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: "#80DAFD" }} />
                          <stop offset="100%" style={{ stopColor: "#C5BAFF" }} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Icon with hover swap */}
                    <div className="mb-2">
                      {card.title === "Data Security" && (
                        <>
                          <FaLock size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaLock size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                      {card.title === "E-commerce" && (
                        <>
                          <FaShoppingCart size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaShoppingCart size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                      {card.title === "Healthcare" && (
                        <>
                          <FaHeartbeat size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaHeartbeat size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                      {card.title === "Finance" && (
                        <>
                          <FaDollarSign size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaDollarSign size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                      {card.title === "Education" && (
                        <>
                          <FaBook size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaBook size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                      {card.title === "SupplyChain" && (
                        <>
                          <FaTruck size={64} className="block group-hover:hidden" fill={`url(#grad-${card.id})`} />
                          <FaTruck size={64} className="hidden group-hover:block" color="#1e3a8a" />
                        </>
                      )}
                    </div>

                    {/* Title (default) and description (on hover) */}
                    <h3 className="text-xl  font-semibold block group-hover:hidden">
                      {card.title}
                    </h3>
                    <p className="hidden  text-blue-950 group-hover:block text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Straight Line Image - Positioned to Right End at Bottom */}
      <div className="absolute bottom-0 right-0 sm:bottom-0 sm:right-0 lg:bottom-0 lg:right-0">
        <img 
          src="/straightLine.svg" 
          alt="Straight Line Decoration" 
        />
      </div>
    </section>
  );
};

export default AiInnovations;
