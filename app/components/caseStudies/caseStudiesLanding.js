"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-[#F6F5FF]">
      {/* Background Container with fallback image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-cover bg-center bg-[url('/landingpages/caseStudyLandin.jpeg')]"></div>

      {/* Content Container - Updated width to 80% */}
      <div className="relative z-10 w-[80%] mx-auto px-4 text-left text-gray-800">
        {/* Heading Container */}
        <div className="heading-container pt-16 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
            Our Company Case Study
          </h1>
        </div>

        {/* Paragraph Container */}
        <div className="paragraph-container mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800">
            Transforming Challenges into Opportunities.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed text-gray-800 mt-12">
            Looking to get similar results?  <Link href="/contact-ai-solutions" className="text-blue-600 hover:text-blue-800 underline font-medium">contact us</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesLanding;
