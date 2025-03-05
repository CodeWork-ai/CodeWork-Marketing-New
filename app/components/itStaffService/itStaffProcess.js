"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaRobot, FaPalette, FaChartLine, FaCommentDots, FaDatabase, FaLock, FaChartBar, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { AnimatedList } from "@/components/ui/animated-list";
import ItStaffCycle from "./itStaffCycle";


let notifications = [
  {
    name: "AI Consulting",
    description: "Custom AI solutions to automate workflows and drive business growth.",
    time: "15m ago",
    icon: <FaRobot className="w-8 h-8 text-[#6A1B9A]" />,
    color: "#6A1B9A",
  },
  {
    name: "Generative AI",
    description: "Transform workflows with AI-powered content creation.",
    time: "10m ago",
    icon: <FaPalette className="w-8 h-8 text-[#FF7043]" />,
    color: "#FF7043",
  },
  {
    name: "Machine Learning",
    description: "Leverage frameworks for predictive insights.",
    time: "8m ago",
    icon: <FaChartLine className="w-8 h-8 text-[#388E3C]" />,
    color: "#388E3C",
  },
  {
    name: "NLP",
    description: "Smarter communication with NLP solutions.",
    time: "6m ago",
    icon: <FaCommentDots className="w-8 h-8 text-[#1976D2]" />,
    color: "#1976D2",
  },
  {
    name: "Data Engineering",
    description: "Build a robust data foundation.",
    time: "4m ago",
    icon: <FaDatabase className="w-8 h-8 text-[#FBC02D]" />,
    color: "#FBC02D",
  },
  {
    name: "Cyber Security",
    description: "Protect your digital assets.",
    time: "3m ago",
    icon: <FaLock className="w-8 h-8 text-[#D32F2F]" />,
    color: "#D32F2F",
  },
  {
    name: "Predictive Analytics",
    description: "Analyze trends and forecast outcomes.",
    time: "2m ago",
    icon: <FaChartBar className="w-8 h-8 text-[#0288D1]" />,
    color: "#0288D1",
  },
 
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-black bg-opacity-50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-start gap-4">
        <div
          className="flex size-8 items-start justify-start rounded-xl"
          style={{
            backgroundColor: 'none',
          }}
        >
          <span className="text-base text-start">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium">
            <span className="text-xs sm:text-base text-gray-200">{name}</span>
          </figcaption>
          <p className="text-[10px] md:text-xs font-normal text-gray-200">
            {description}
          </p>
          <div className="text-xs mt-1 text-red-400 hover:font-semibold">Read More</div>
        </div>
      </div>
    </figure>
  );
};

const ItStaffProcess = () => {
  return (
    <div
      className={cn(
        "flex justify-start w-full pl-28 mb-12", // Changed px-4 to pl-5 for 20px left spacing
      )}
    >
      <div
        className={cn(
          "relative h-[400px] w-[450px] flex-col overflow-hidden rounded-lg md:shadow-xl bg-black bg-opacity-0",
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Link key={idx} href={'/empowering-innovation-ai-advanced-technologies'}>
              <ShineBorder 
                className="relative flex flex-col bg-black bg-opacity-50 overflow-hidden rounded-lg md:shadow-xl" 
                color={["#1dcaf5", "#f04f57"]}
              >
                <Notification className='bg-black' {...item} />
              </ShineBorder>
            </Link>
          ))}
        </AnimatedList>
        
      </div>
       {/* Right Section: Form */}
                  <div className="flex-1 space-y-4 ml-0 md:ml-5">
                      {/* <h2 className="text-2xl font-bold text-gray-200">At CodeWork</h2>
                      <p className="text-gray-200">
                          We are dedicated to leveraging advanced AI, ML, and Data Science to transform your business. Let's collaborate to craft your success story and showcase the potential of AI in driving sustainable growth.
                      </p> */}
                     <ItStaffCycle/>
                  </div>
    </div>
    
  );
}

export default ItStaffProcess;