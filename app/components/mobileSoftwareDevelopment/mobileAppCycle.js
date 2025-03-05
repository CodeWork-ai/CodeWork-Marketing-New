"use client"; // Ensures the component only runs on the client side

import React, { useEffect, useState } from "react";
import { Search, Monitor, Rocket, Server, CheckCircle } from "lucide-react";

const MobileAppCycle = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const radius = 120; // Adjusted for better spacing
    const centerX = 150; // Center of the container
    const centerY = 150;
    const angleStep = (2 * Math.PI) / 5; // Divides circle into 5 equal parts

    const newPositions = [...Array(5)].map((_, i) => ({
      left: `${centerX + radius * Math.cos(i * angleStep)}px`,
      top: `${centerY + radius * Math.sin(i * angleStep)}px`,
    }));

    setPositions(newPositions);
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
      {/* Rotating Container */}
      <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-500 animate-spinSlow">
        {[
          { icon: <Search size={30} className="text-black" />, bg: "bg-yellow-500" },
          { icon: <Monitor size={30} className="text-black" />, bg: "bg-blue-500" },
          { icon: <Server size={30} className="text-black" />, bg: "bg-purple-500" },
          { icon: <CheckCircle size={30} className="text-black" />, bg: "bg-green-500" },
          { icon: <Rocket size={30} className="text-black" />, bg: "bg-red-500" },
        ].map(({ icon, bg }, index) => (
          <div
            key={index}
            className={`absolute flex items-center justify-center ${bg} p-4 rounded-full`}
            style={positions[index] || { visibility: "hidden" }} // Prevents flash before positions are calculated
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAppCycle;
