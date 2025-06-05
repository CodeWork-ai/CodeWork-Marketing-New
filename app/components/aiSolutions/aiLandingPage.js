"use client";
import React from "react";
import Image from "next/image";

const AiLandingPage = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/ailandin.jpeg')]"></div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-11">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold">
            Empowering Innovation with AI and Advanced Technologies
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-gray-800">
            We are driven by a passion for delivering intelligent, future-ready
            solutions powered by Artificial Intelligence and advanced technologies.
            Our expertise spans across key areas that help businesses innovate,
            grow, and stay ahead in the fast-evolving digital landscape. From AI
            consulting to Predictive Analytics, we bring the right mix of
            technology and strategy to solve real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiLandingPage;
