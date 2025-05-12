import React from "react";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-b w-full from-[#FBF8E6] to-[#EBF9FF] py-16 pt-8 relative sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="px-4 pt-20 flex w-full justify-center">
        <div className="w-full px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-24">
          {/* Left Side: Text Content (65% width) */}
          <div className="w-full md:w-[65%] space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A3C5E]">
              What do we Offer?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#1A3C5E] leading-relaxed">
              Codework redefines possibilities with cutting-edge AI services
              designed to empower businesses in the digital era. From AI model
              training that enhances system intelligence to custom software
              development tailored to unique needs, excellence is delivered at
              every step. Expertise spans mobile software development for iOS
              and Android, web designing to create stunning digital experiences,
              and cloud computing solutions for seamless scalability and
              security. With Codework, adopting technology means embracing
              innovation with a personal touch.
            </p>
            {/* Button Container */}
            <div>
  <Link href="/ai-services">
    <button
      className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base"
      style={{
        background: 'linear-gradient(90deg, #C7A9FF 0%, #AFD5FF 100%)',
      }}
    >
      <span className="text-gray-800">Explore Our Services</span>
      <IoIosArrowDroprightCircle size={24} className="text-gray-800" />
    </button>
  </Link>
</div>
          </div>

          {/* Right Side: Big Image (35% width) */}
          <div className="w-full md:w-[35%]">
            <Image
              src="/WhatweOffer.svg"
              alt="Team working"
              width={700}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Left Corner Decoration */}
      <div className="absolute bottom-0 left-0">
        <img 
          src="/straightLine.svg" 
          alt="Straight Line Decoration" 
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
