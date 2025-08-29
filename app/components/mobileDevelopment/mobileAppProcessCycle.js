"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { VscNote } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { TbAdjustmentsCode } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

const MobileAppProcessCycle = () => {
  const icons = [
    { icon: <AiOutlineFileSearch size={32} />, label: "Analysis" },
    { icon: <VscNote size={32} />, label: "Planning" },
    { icon: <BsTools size={32} />, label: "Development" },
    { icon: <TbAdjustmentsCode size={32} />, label: "Testing" },
    { icon: <FaAward size={32} />, label: "Quality" },
    { icon: <GoRocket size={32} />, label: "Launch" },
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const containerSize = window.innerWidth < 640 ? 280 : 380;
      const radius = containerSize === 280 ? 110 : 150;
      const centerX = containerSize / 2;
      const centerY = containerSize / 2;
      const angleStep = (2 * Math.PI) / icons.length;
      const iconContainerSize = containerSize === 280 ? 64 : 80;

      const newPositions = icons.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        return {
          left: `${centerX + radius * Math.cos(angle) - iconContainerSize / 2}px`,
          top: `${centerY + radius * Math.sin(angle) - iconContainerSize / 2}px`,
          angle,
        };
      });

      setPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [icons.length]);

  return (
    <div className="relative w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] mx-auto flex items-center justify-center">
      {/* Outer gradient circle with glow */}
      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-secondary/20 via-secondary/10 to-primary/20 shadow-glow animate-spin-slow">
        <div className="w-full h-full rounded-full border-2 border-secondary/30"></div>
      </div>

      {/* Middle rotating dashed circle */}
      <div className="absolute inset-6 rounded-full border-dashed border-2 border-secondary/50 animate-spin-reverse"></div>

      {/* Inner glowing center */}
      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-secondary to-primary shadow-glow animate-pulse"></div>

      {/* Central logo/text */}
      <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-secondary flex items-center justify-center z-10">
        <span className="text-secondary font-bold text-xs sm:text-sm">MA</span>
      </div>

      {/* Rotating container for all icons */}
      <div className="absolute w-full h-full animate-spin-icons">
        {positions.map(({ left, top, angle }, index) => {
          const { icon, label } = icons[index];
          return (
            <div
              key={index}
              className="absolute"
              style={{ left, top, transform: `rotate(${angle}rad) translate(0, 0)` }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 backdrop-blur-xl border-3 border-secondary rounded-full shadow-lg cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-12 hover:bg-secondary hover:border-primary hover:shadow-[0_0_25px_rgba(29,223,234,0.8)] group -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${-angle}rad)` }}
                title={label}
              >
                <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                  {icon}
                </div>
                {/* Floating label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-secondary text-primary px-2 py-1 rounded-md text-xs font-semibold shadow-lg whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connecting lines animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <defs>
          <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ddfea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#050c25" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {positions.map((pos, index) => {
          const nextIndex = (index + 1) % positions.length;
          const nextPos = positions[nextIndex];
          if (!pos || !nextPos) return null;

          return (
            <line
              key={index}
              x1={parseInt(pos.left) + 32}
              y1={parseInt(pos.top) + 32}
              x2={parseInt(nextPos.left) + 32}
              y2={parseInt(nextPos.top) + 32}
              stroke="url(#mobileLineGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes spin-icons {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        .animate-spin-icons {
          animation: spin-icons 25s linear infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 60px rgba(29, 223, 234, 0.3);
        }
      `}</style>
    </div>
  );
};

export default MobileAppProcessCycle;
