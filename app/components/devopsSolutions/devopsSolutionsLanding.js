"use client";
import React from "react";
import Image from "next/image";

const DevopsSolutionsLanding = () => {
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
        <div className="heading-container pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
          Scalable DevOps Solutions for Accelerated 
            <br />
            <span className="mt-2 inline-block">Software Delivery</span>
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
In today’s digital era, businesses must develop, test, and deploy software efficiently. Codework.ai offers advanced DevOps solutions to streamline workflows, enhance collaboration, and optimize deployment. By integrating development and operations, businesses achieve faster software delivery with security, scalability, and efficiency.          </p>
        </div>
      </div>
    </section>
  );
};

export default DevopsSolutionsLanding;
