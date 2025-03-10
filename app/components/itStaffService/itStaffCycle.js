"use client"; // Ensures the component only runs on the client side
import { HiCubeTransparent } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { FaHandshake } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { TbLocationSearch } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";const ItStaffCycle = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Function to calculate positions based on container size
    const calculatePositions = () => {
      const containerSize = window.innerWidth < 640 ? 240 : 340; // Smaller on mobile (<640px), original 340px otherwise
      const radius = containerSize === 240 ? 110 : 160; // Adjusted radius: 110px for mobile, 160px for larger screens
      const centerX = containerSize / 2; // Dynamic center based on container size
      const centerY = containerSize / 2;
      const angleStep = (2 * Math.PI) / 5; // Divide circle into 5 equal parts
      const iconContainerSize = containerSize === 240 ? 60 : 90; // 60px on mobile (40px icon + 20px padding), 90px otherwise

      const newPositions = [
        { left: `${centerX + radius * Math.cos(0 * angleStep) - iconContainerSize / 2}px`, top: `${centerY + radius * Math.sin(0 * angleStep) - iconContainerSize / 2}px` }, // Search
        { left: `${centerX + radius * Math.cos(1 * angleStep) - iconContainerSize / 2}px`, top: `${centerY + radius * Math.sin(1 * angleStep) - iconContainerSize / 2}px` }, // Monitor
        { left: `${centerX + radius * Math.cos(2 * angleStep) - iconContainerSize / 2}px`, top: `${centerY + radius * Math.sin(2 * angleStep) - iconContainerSize / 2}px` }, // Rocket
        { left: `${centerX + radius * Math.cos(3 * angleStep) - iconContainerSize / 2}px`, top: `${centerY + radius * Math.sin(3 * angleStep) - iconContainerSize / 2}px` }, // Server
        { left: `${centerX + radius * Math.cos(4 * angleStep) - iconContainerSize / 2}px`, top: `${centerY + radius * Math.sin(4 * angleStep) - iconContainerSize / 2}px` }, // CheckCircle
      ];

      setPositions(newPositions);
    };

    calculatePositions(); // Initial calculation
    window.addEventListener("resize", calculatePositions); // Recalculate on resize

    return () => window.removeEventListener("resize", calculatePositions); // Cleanup
  }, []);

  return (
    <div className="relative w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] mx-auto flex items-center justify-center">
      {/* Rotating Container */}
      <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-500 animate-spinSlow">
        {[
          { icon: <LuNotepadText size={40} className="text-black sm:text-black" />, bg: "bg-yellow-500" },      // Index 0
          { icon: <MdPersonSearch size={40} className="text-black sm:text-black" />, bg: "bg-blue-500" },       // Index 1
          { icon: <HiCubeTransparent size={40} className="text-black sm:text-black" />, bg: "bg-red-500" },         // Index 2
          { icon: <FaHandshake size={40} className="text-black sm:text-black" />, bg: "bg-purple-500" },      // Index 3
          { icon: <TbLocationSearch size={40} className="text-black sm:text-black" />, bg: "bg-green-500" },  // Index 4
        ].map(({ icon, bg }, index) => (
          <div
            key={index}
            className={`absolute flex items-center justify-center ${bg} p-3 sm:p-5 rounded-full`}
            style={positions[index] || { visibility: "hidden" }} // Ensures position is applied correctly
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItStaffCycle;