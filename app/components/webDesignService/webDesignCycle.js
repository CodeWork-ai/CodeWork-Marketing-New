"use client";
import { BsTools } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { WiCloudy } from "react-icons/wi";
import { TbCloudComputing, TbCloudLock } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import { TbDevicesPc } from "react-icons/tb";
import { VscNote } from "react-icons/vsc";
import { HiOutlineLightBulb } from "react-icons/hi";
const WebDesignCycle = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const containerSize = window.innerWidth < 640 ? 240 : 340;
      const radius = containerSize === 240 ? 110 : 160;
      const centerX = containerSize / 2;
      const centerY = containerSize / 2;
      const angleStep = (2 * Math.PI) / 6;
      const iconContainerSize = containerSize === 240 ? 60 : 90;

      const newPositions = Array.from({ length: 6 }, (_, i) => ({
        left: `${centerX + radius * Math.cos(i * angleStep) - iconContainerSize / 2}px`,
        top: `${centerY + radius * Math.sin(i * angleStep) - iconContainerSize / 2}px`,
      }));

      setPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  const icons = [
    { icon: <AiOutlineFileSearch size={40} />, borderColor: "border-yellow-500", textColor: "text-yellow-500" },
    { icon: <VscNote size={40} />, borderColor: "border-blue-500", textColor: "text-blue-500" },
    { icon: <BsTools size={40} />, borderColor: "border-red-500", textColor: "text-red-500" },
    { icon: <HiOutlineLightBulb size={40} />, borderColor: "border-purple-500", textColor: "text-purple-500" },
    { icon: <TbDevicesPc size={40} />, borderColor: "border-green-500", textColor: "text-green-500" },
    { icon: <GoRocket size={40} />, borderColor: "border-orange-500", textColor: "text-orange-500" },
  ];

  return (
    <div className="relative w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] mx-auto flex items-center justify-center">
      <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-300 animate-spinSlow">
        {icons.map(({ icon, borderColor, textColor }, index) => (
          <div
            key={index}
            className={`absolute flex items-center justify-center bg-black border-4 p-3 sm:p-5 rounded-full ${borderColor} ${textColor}`}
            style={positions[index] || { visibility: "hidden" }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignCycle;
