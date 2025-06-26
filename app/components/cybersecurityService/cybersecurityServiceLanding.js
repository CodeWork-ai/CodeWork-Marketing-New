"use client";
import React from "react";
import Image from "next/image";

const CybersecurityServiceLanding = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold ">
        Advanced Cybersecurity Solutions for a 
            <br />
            <span className="mt-2 inline-block"> Secure Digital Future</span>
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
In the modern digital world, cyber threats are evolving rapidly. Codework offers comprehensive cybersecurity services to protect businesses, enterprises, and government organizations from cyber risks. With cutting-edge security solutions, safeguarding sensitive data, preventing cyberattacks, and ensuring compliance with industry standards becomes seamless.          </p>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityServiceLanding;
