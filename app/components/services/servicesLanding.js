"use client";
import React from "react";
import Image from "next/image";

const ServiceLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/ailandin.jpeg')]"></div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 mt-16 sm:mt-0 lg:mt-0 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
            Driving Innovation Through Cutting-Edge AI Services
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-3">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
            We redefine possibilities with cutting-edge AI services designed to
            empower businesses in the digital era. Our offerings are not only
            quick, cost-effective, and accurate but also tailored to meet the
            unique needs of each client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceLanding;
