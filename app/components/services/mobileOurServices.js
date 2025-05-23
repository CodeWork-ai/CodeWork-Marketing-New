"use client";

import React, { useState } from "react";
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

const MobileOurServices = () => {
  const services = [
    { title: "AI Model Training", icon: FaBrain, link: "/ai-model-training" },
    { title: "Software Development", icon: FaCode, link: "/software-development-service" },
    { title: "Custom Development", icon: FaDatabase, link: "/custom-software-development" },
    { title: "DevOps Solutions", icon: BiSync, link: "/devops-solutions" },
    { title: "Cloud Computing", icon: FaCloud, link: "/cloud-computing" },
    { title: "Cybersecurity Services", icon: FaShieldAlt, link: "/cybersecurity-service" },
    { title: "Mobile Development", icon: FaMobile, link: "/mobile-software-development" },
    { title: "Web Designing", icon: FaGlobe, link: "/web-design-service" },
    { title: "IT Staff Augmentation", icon: FaUsers, link: "/it-staff-service" },
    { title: "Penetration Testing", icon: FaLock, link: "/penetration-testing-service" },
  ];

  const totalPages = 2;
  const [page, setPage] = useState(0);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  const visible =
    page === 0 ? services.slice(0, 5) : services.slice(5, services.length);

  return (
    <div
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 relative"
      style={{
        backgroundImage: `url('/areaExcellencebg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16">
        <div className="w-full lg:w-1/2 ml-0 md:ml-12 lg:ml-28">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {visible.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="flex items-center space-x-4 pt-11 h-[70px]">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-b from-purple-300 to-cyan-300 rounded-full shadow-md">
                    <Icon className="w-[36px] h-[36px] text-indigo-950" />
                  </div>

                  {/* Title pill with arrow, wrapped in a link */}
                  <Link href={svc.link}>
                    <span className="relative bg-white w-60 h-[70px] flex items-center justify-center transition text-gray-800 font-medium text-lg">
                      {/* Left arrow decoration */}
                      <span
                        className="
                          absolute left-0 top-1/2
                          transform -translate-x-full -translate-y-1/2
                          border-t-[35px] border-t-transparent
                          border-b-[35px] border-b-transparent
                          border-r-[15px] border-r-white
                        "
                      />
                      {svc.title}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="text-gray-600 pt-8 mb-6">
            With Codework, adopting technology means embracing innovation with a personal touch. Commitment to excellence ensures that every project is delivered with precision and care, making us a trusted partner in the digital journey.
          </p>

          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition ${
                page === 0 ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              ←
            </button>
            <div className="flex space-x-2">
              {[0, 1].map((dot) => (
                <span
                  key={dot}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    page === dot
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition ${
                page === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <img src="/straightLine.svg" alt="Straight Line Decoration" />
      </div>
    </div>
  );
};

export default MobileOurServices;
