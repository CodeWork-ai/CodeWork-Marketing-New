"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BsTools } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { TbAdjustmentsCode } from "react-icons/tb";
import { GoRocket } from "react-icons/go";
import { VscNote } from "react-icons/vsc";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { AnimatedList } from "@/components/ui/animated-list";
import WebDesignCycle from "./webDesignCycle";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDevicesPc } from "react-icons/tb";


// SoftwareProcessCycle Component
const SoftwareProcessCycle = () => {
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
    { icon: <TbAdjustmentsCode size={40} />, borderColor: "border-purple-500", textColor: "text-purple-500" },
    { icon: <FaAward size={40} />, borderColor: "border-green-500", textColor: "text-green-500" },
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

// AgileSoftwareProcess Component
let notifications = [
  {
    name: "Research & Strategy",
    description: "Understanding brand identity, target audience, and business objectives",
    time: "15m ago",
    icon: <AiOutlineFileSearch className="w-8 h-8 text-yellow-500" />,
    color: "#FFFF00", // Yellow-500 approximate
  },
  {
    name: "Creative UI/UX Implementation ",
    description: "Developing visually appealing and functional designs.",
    time: "10m ago",
    icon: <VscNote className="w-8 h-8 text-blue-500" />,
    color: "#3B82F6", // Blue-500 approximate
  },
  {
    name: "Wireframing & Prototyping",
    description: "Structuring layouts and creating design prototypes.",
    time: "8m ago",
    icon: <BsTools className="w-8 h-8 text-red-500" />,
    color: "#EF4444", // Red-500 approximate
  },
  {
    name: "Performance Optimization",
    description: "Enhancing speed, security, and functionality.",
    time: "6m ago",
    icon: <HiOutlineLightBulb className="w-8 h-8 text-purple-500" />,
    color: "#8B5CF6", // Purple-500 approximate
  },
  {
    name: "Responsive Development",
    description: " Ensuring compatibility across all devices.",
    time: "4m ago",
    icon: <TbDevicesPc className="w-8 h-8 text-green-500" />,
    color: "#10B981", // Green-500 approximate
  },
  {
    name: "Launch & Ongoing Support",
    description: " Continuous maintenance and updates.",
    icon: <GoRocket className="w-8 h-8 text-orange-500" />,
    color: "#F97316", // Orange-500 approximate
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-6 sm:p-10",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-start gap-4">
        <div
          className="flex size-8 items-start justify-start rounded-xl"
          style={{
            backgroundColor: "none",
          }}
        >
          <span className="text-base text-start">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium">
            <span className="text-xs sm:text-base text-gray-200">{name}</span>
          </figcaption>
          {/* Gradient Line */}
          <div className="relative w-[150px] sm:w-[200px] md:w-[300px] h-[1px] bg-white overflow-hidden my-2">
            <div className="absolute inset-0 h-full bg-gradient-to-r from-[#1dcaf5] via-white to-[#f04f57] 
                animate-[shine_2s_linear_infinite]"></div>
          </div>
          <p className="text-[10px] sm:text-xs font-normal text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const WebDesignProcess = () => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-start w-full px-5 md:pl-28 mb-12",
      )}
    >
      <div
        className={cn(
          "relative h-[310px] mb-10 w-full md:w-[450px] flex-col overflow-hidden rounded-lg md:shadow-xl bg-black bg-opacity-0",
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Link key={idx} href={"/empowering-innovation-ai-advanced-technologies"}>
              <ShineBorder
                className="relative flex flex-col max-h-[140px] justify-center items-center w-full gap-6 bg-black bg-opacity-50 overflow-hidden rounded-lg md:shadow-xl"
                color={["#1dcaf5", "#f04f57"]}
              >
                <Notification className="bg-black" {...item} />
              </ShineBorder>
            </Link>
          ))}
        </AnimatedList>
      </div>
      {/* Right Section: Form */}
      <div className="flex-1 space-y-4 ml-0 md:ml-5 mt-5 md:mt-0">
      <WebDesignCycle/>
      </div>
    </div>
  );
};

export default WebDesignProcess;