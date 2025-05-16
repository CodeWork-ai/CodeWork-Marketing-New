"use client";
import React from "react";
import Image from "next/image";

const CloudComputingLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/landing.mp4" type="video/mp4" />
        </video> */}
        {/* Dark overlay for better text visibility */}
      </div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
         Transforming Businesses with Cloud Technology
            
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
         Codework.ai delivers cutting-edge cloud computing solutions, helping enterprises migrate, manage, and optimize operations efficiently. With expertise in cloud infrastructure, serverless computing, and AI-driven automation, solutions are designed to enhance security, scalability, and cost-effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudComputingLanding;
