"use client";
import React from "react";
import Image from "next/image";

const AiModelLAnding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image only */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/ailandin.jpeg')]"></div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold ">
          Empowering Innovation with AI and
            <br />
            <span className="mt-2 inline-block"> Advanced Technologies</span>
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-gray-800">
          Helping businesses grow through digital solutions, our team blends technology and strategy to solve real challenges. We specialize in data analysis, automation, and software development to help your business grow, work more efficiently, and stay ahead in today's fast-moving digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiModelLAnding;
