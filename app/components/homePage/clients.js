"use client";
import React, { useEffect, useRef } from "react";

const Clients = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const clientLogos = [
    { name: "AIKYNF", logo: "/client/AIKYINE.png" },
    { name: "INTULOGIC", logo: "/client/intulogic.svg" },
    { name: "Prezerv", logo: "/client/prezervv.png" },
    { name: "NALAM", logo: "/client/nalam.svg" },
    { name: "EXTRA6", logo: "/client/radiin.svg" },
    { name: "MTM", logo: "/client/mtm.svg" },
    { name: "STOREFRIES", logo: "/client/storefries.svg" },
    { name: "EXTRA1", logo: "/client/webSign.png" },
    { name: "EXTRA5", logo: "/client/hyper.svg" },
    { name: "EXTRA2", logo: "/client/sparksGlobal.svg" },
    { name: "EXTRA3", logo: "/client/futuroinfo.png" },
    { name: "EXTRA4", logo: "/client/robocon.png" },
  ];

  const createLogoCard = (client) => `
    <div class="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center p-4 rounded-xl min-w-[120px] h-30">
      <img 
        src="${client.logo}" 
        alt="${client.name}" 
        class="max-w-full max-h-full object-contain"
        style="max-width: 200px; max-height: 120px;"
      />
    </div>
  `;

  const renderLogos = (target, startIndex = 0) => {
    if (!target) return;
    const slicedData =
      startIndex > 0 ? clientLogos.slice(startIndex) : clientLogos;
    const doubled = [...slicedData, ...slicedData];
    target.innerHTML = doubled.map((client) => createLogoCard(client)).join("");
  };

  useEffect(() => {
    renderLogos(row1Ref.current, 0);
    renderLogos(row2Ref.current, 6);
  }, []);

  return (
    <div className="relative min-h-[50vh] sm:min-h-[74vh] bg-primary flex items-end overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/15 rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full mx-auto text-center relative z-10">
        {/* Main client logos section */}
        <div className="bg-primary w-full min-h-[300px] sm:min-h-[400px] p-6 sm:p-10 md:p-12 lg:p-10 xl:p-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            
            {/* Main Heading with Enhanced Styling */}
            <h2 className="relative inline-block">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent leading-tight">
                Our Happy
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary ml-2 relative">
                Clients
                {/* Underline Animation */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
              </span>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
            </h2>

            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Trusted by innovative companies worldwide who choose excellence
            </p>
          </div>

          {/* First row - left to right */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative mb-8">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-primary to-transparent"></div>
            <div
              ref={row1Ref}
              className="marquee-inner flex transform-gpu min-w-[200%] py-4"
            ></div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-primary to-transparent"></div>
          </div>

          {/* Second row - right to left */}
          <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-primary to-transparent"></div>
            <div
              ref={row2Ref}
              className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4"
            ></div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-primary to-transparent"></div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }

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
    </div>
  );
};

export default Clients;
