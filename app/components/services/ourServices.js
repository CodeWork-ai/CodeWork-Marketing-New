import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaGlobe,
  FaUsers,
  FaLock,
} from "react-icons/fa";
import { BiSync } from "react-icons/bi";
import MobileOurServices from "./mobileOurServices";

const OurServices = () => {
  const services = [
    {
      title: "AI Model Training",
      icon: FaBrain,
      tooltip: "AI Model Training",
      link: "/ai-model-training",
    },
    {
      title: "Software Development",
      icon: FaCode,
      tooltip: "Software Development",
      link: "/software-development-service",
    },
    {
      title: "Custom Development",
      icon: FaDatabase,
      tooltip: "Custom Development",
      link: "/custom-software-development",
    },
    { 
      title: "DevOps Solutions", 
      icon: BiSync, 
      tooltip: "DevOps Solutions",
      link: "/devops-solutions",
    },
    { 
      title: "Cloud Computing", 
      icon: FaCloud, 
      tooltip: "Cloud Computing",
      link: "/cloud-computing",
    },
    { 
      title: "Cyber security", 
      icon: FaShieldAlt, 
      tooltip: "Cyber security",
      link: "/cybersecurity-service",
    },
    {
      title: "Mobile Development",
      icon: FaMobile,
      tooltip: "Mobile Development",
      link: "/mobile-software-development",
    },
    { 
      title: "Web Designing", 
      icon: FaGlobe, 
      tooltip: "Web Designing",
      link: "/web-design-service",
    },
    {
      title: "IT Staff Augmentation",
      icon: FaUsers,
      tooltip: "IT Staff Augmentation",
      link: "/it-staff-service",
    },
    {
      title: "Penetration Testing",
      icon: FaLock,
      tooltip: "Penetration Testing",
      link: "/penetration-testing-service",
    },
  ];

  // Split icons into rows
  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 7);
  const row3 = services.slice(7, 10);

  // Render icon with animation for specific columns
  const renderIcon = (service, idx, rowIdx) => {
    // Determine if the icon is in the first or last column of its row
    const isFirstColumn = idx === 0;
    const isLastColumn = 
      (rowIdx === 0 && idx === row1.length - 1) ||
      (rowIdx === 1 && idx === row2.length - 1) ||
      (rowIdx === 2 && idx === row3.length - 1);
    
    // Define animation classes based on column position
    let animationClass = "";
    if (service.title === "AI Model Training" || service.title === "DevOps Solutions" || service.title === "Web Designing") {
      animationClass = isFirstColumn ? "hover:-translate-x-2" : "";
    } else if (isLastColumn) {
      animationClass = "hover:translate-x-2";
    }

    const iconContent = (
      <div className="relative group">
        {/* Circle + border arc */}
        <div
          className={`
            w-20 h-20
            bg-white
            rounded-full
            flex items-center justify-center
            shadow-sm hover:shadow-md
            hover:bg-gradient-to-b hover:from-purple-300 hover:to-cyan-300
            transition-all duration-300
            cursor-pointer
            transform hover:scale-110 ${animationClass}
            relative
          `}
        >
          {React.createElement(service.icon, {
            className: "text-3xl text-indigo-950",
          })}
          {/* Half-circle border on the right */}
          <div
            className="
              absolute inset-0
              rounded-full
              border-[3px] border-sky-300
              border-l-0 border-t-0
              transform rotate-135
            "
          />
        </div>
        {/* Tooltip, appears only on hover */}
        <div
          className="
            absolute
            opacity-0 group-hover:opacity-100
            -top-20 right-0
            w-64 px-6 py-3
            text-lg font-medium text-[#1A2B3B]
            bg-gradient-to-br from-purple-300 to-cyan-300
            rounded-full shadow-md
            transition-opacity duration-200
            pointer-events-none
          "
        >
          {service.tooltip}
          {/* Tail: a little triangle pointing at the circle */}
          <span
            className="
              absolute top-14 -right-2
              w-9 h-11
              bg-gradient-to-tr from-cyan-300 to-cyan-300
            "
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              transform: "translateY(-50%) rotate(155deg)",
            }}
          />
        </div>
      </div>
    );

    return (
      <Link key={`${rowIdx}-${idx}`} href={service.link || "#"}>
        {iconContent}
      </Link>
    );
  };

  return (
    <div>
      {/* Mobile only */}
      <div className="flex md:hidden">
        <MobileOurServices />
      </div>

      {/* Tablet+ / Desktop only */}
      <div className="hidden md:block relative bg-gradient-to-b from-[#FBF8E6] to-[#EBF9FF] p-8 md:p-44">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h2 className="text-[#1A2B3B] text-4xl font-semibold mb-6">
              Our Services
            </h2>
            <p className="text-[#1A2B3B] text-lg mb-12 max-w-2xl">
              With Codework, adopting technology means embracing innovation with
              a personal touch. Commitment to excellence ensures that every
              project is delivered with precision and care, making us a trusted
              partner in the digital journey.
            </p>
          </div>

          {/* Right Column: Icon Grid */}
          <div className="md:w-1/2 flex flex-col items-end space-y-6">
            <div className="flex justify-end space-x-6">
              {row1.map((service, idx) => renderIcon(service, idx, 0))}
            </div>
            <div className="flex justify-end space-x-7 transform translate-x-12">
              {row2.map((service, idx) => renderIcon(service, idx, 1))}
            </div>
            <div className="flex justify-end space-x-6">
              {row3.map((service, idx) => renderIcon(service, idx, 2))}
            </div>
          </div>
        </div>

        {/* Straight Line Decoration */}
        <div className="absolute bottom-0 right-0">
          <img src="/straightLine.svg" alt="Straight Line Decoration" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;