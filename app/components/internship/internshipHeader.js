"use client";
import React from "react";
import Image from "next/image";

const InternshipHeader = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/caseStudiesBg.jpg')]"></div>

      {/* Flex Container for content and image */}
      <div className="relative z-10 w-[80%] mx-auto px-4  mb-8 flex flex-col md:flex-row items-center justify-between text-gray-800">
        {/* Left: Content */}
        <div className="w-full pt-16   md:w-3/5 text-left">
          <div className="heading-container mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
              Kickstart Your Career with Our Internship Program
            </h1>
          </div>
          <div className="paragraph-container mb-8">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
              Are you ready to gain real-world experience in AI and technology?
              Join our internship program at Codework, where you'll learn, grow,
              and contribute to exciting projects. Apply now and take the first
              step toward your future!
            </p>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-[40%]  pl-3 mt-8">
          <Image
            src="/InternLanding.png" // Update with your image path
            alt="Internship Program"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default InternshipHeader;
